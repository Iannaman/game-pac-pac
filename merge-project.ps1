# ==============================================================================
# Script per unire la struttura e i file di codice/testo per LLM / Copilot
# Compatible con Windows PowerShell 5.1 e PowerShell 7+
# ==============================================================================

# Estensioni file da includere
$extIncluse = @('*.txt', '*.ps1', '*.bat', '*.cmd', '*.js', '*.ts', '*.py', '*.html', '*.css', '*.json', '*.sql', '*.md', '*.vbs')

# Cartelle o file da ignorare
$cartelleDaIgnorare = @('.git', 'node_modules', 'bin', 'obj', '.vs', '.vscode')

# Nome del file di output
$fileOutput = "progetto_unificato.txt"

# Directory corrente di esecuzione dello script
$rootPath = Get-Location
$scriptName = $MyInvocation.MyCommand.Name

Write-Host "Elaborazione in corso nella cartella: $rootPath" -ForegroundColor Cyan

# Usa StringBuilder per gestire in modo efficiente il testo ed evitare lock sul file
$builder = [System.Text.StringBuilder]::new()

# 1. GENERAZIONE ALBERO STRUTTURA CARTELLE
[void]$builder.AppendLine("=== STRUTTURA DEL PROGETTO ===")

function Get-FolderTree {
    param (
        [string]$Path,
        [string]$Indent = ""
    )
    $items = Get-ChildItem -Path $Path -ErrorAction SilentlyContinue | 
             Where-Object { 
                 $cartelleDaIgnorare -notcontains $_.Name -and 
                 $_.Name -ne $fileOutput -and 
                 $_.Name -ne $scriptName 
             }
    
    $count = $items.Count
    $i = 0
    foreach ($item in $items) {
        $i++
        $isLast = ($i -eq $count)
        
        if ($isLast) {
            $prefix = "└── "
            $nextIndent = "    "
        } else {
            $prefix = "├── "
            $nextIndent = "│   "
        }
        
        [void]$script:builder.AppendLine("$Indent$prefix$($item.Name)")
        
        if ($item.PSIsContainer) {
            $newIndent = $Indent + $nextIndent
            Get-FolderTree -Path $item.FullName -Indent $newIndent
        }
    }
}

Get-FolderTree -Path $rootPath
[void]$builder.AppendLine()
[void]$builder.AppendLine("=" * 50)
[void]$builder.AppendLine()

# 2. RICERCA E UNIONE DEI FILE
$fileList = Get-ChildItem -Path $rootPath -Recurse -File | Where-Object {
    $file = $_
    $haEstensioneCorretta = $extIncluse | Where-Object { $file.Name -like $_ }
    $inCartellaEsclusa = $cartelleDaIgnorare | Where-Object { $file.FullName -like "*\$_\*" }
    $nonEOutput = ($file.Name -ne $fileOutput) -and ($file.Name -ne $scriptName)

    return $haEstensioneCorretta -and -not $inCartellaEsclusa -and $nonEOutput
}

$totaleFile = $fileList.Count
$corrente = 0

foreach ($file in $fileList) {
    $corrente++
    $relativePath = Resolve-Path -Path $file.FullName -Relative

    Write-Host "[$corrente/$totaleFile] Aggiunta di: $relativePath" -ForegroundColor Gray

    $header = @"
================================================================================
FILE: $relativePath
================================================================================
"@
    [void]$builder.AppendLine($header)
    
    $contenuto = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($contenuto) {
        [void]$builder.AppendLine($contenuto)
    }
    [void]$builder.AppendLine("`n")
}

# 3. SCRITTURA UNICA SU FILE
Set-Content -Path $fileOutput -Value $builder.ToString() -Encoding UTF8

Write-Host "`nOperazione completata! Creato il file: $fileOutput" -ForegroundColor Green