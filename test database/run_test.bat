@echo off
setlocal

:: set connections to database
set DB_HOST=yilz-1.mysql.database.azure.com
set DB_USER=yilz
set DB_PASS=csc301P24!
set DB_NAME=test_database

set DB_PORT=3306

set FILE=test_1.sql

:: execute the file
echo Executing %FILE%...
mysql -h %DB_HOST% --port=%DB_PORT% -u %DB_USER% --password=%DB_PASS% -p %DB_NAME% --password=%DB_PASS% --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < %FILE%

:: check for errors
if errorlevel 1 (
echo Error executing %FILE%.
) else (
echo %FILE% executed successfully.
)

endlocal