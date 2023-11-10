@echo off
setlocal

:: set connections to database
set DB_HOST=yilz-1.mysql.database.azure.com
set DB_USER=yilz
set DB_PASS=csc301P24!
set DB_NAME=test_database

set DB_PORT=3306

:: the sql files to execute
set SQL_FILES=create_database_2.sql create_view_1.sql insert_data_1.sql

:: loop through the list of SQL files and execute them
for %%f in (%SQL_FILES%) do (

  echo Executing %%f...
  
  mysql -h %DB_HOST% --port=%DB_PORT% -u %DB_USER% --password=%DB_PASS% -p %DB_NAME% --password=%DB_PASS% --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < %%f

  if errorlevel 1 (
    echo Error executing %%f.
  ) else (
    echo %%f executed successfully.
  )
  
)

endlocal