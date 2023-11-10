@echo off
setlocal

:: set connections to database
set DB_HOST=yilz-1.mysql.database.azure.com
set DB_USER=yilz
set DB_PASS=csc301P24!
set DB_NAME=test_database

set DB_PORT=3306

:: the sql files to execute
set SQL_FILES=query.sql

mysql -h %DB_HOST% --port=%DB_PORT% -u %DB_USER% --password=%DB_PASS% -p %DB_NAME% --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < %%f

endlocal