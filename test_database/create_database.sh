# set connections to database
DB_HOST="yilz-1.mysql.database.azure.com"
DB_USER="yilz"
DB_PASS="csc301P24!"
DB_NAME="test_database"

DB_PORT=3306

# the sql files to execute
SQL_FILES=("create_database_1.sql" "create_view_1.sql" "insert_data_1.sql")

# loop through the list of SQL files and execute them
for file in "${SQL_FILES[@]}"; do

  echo "Executing $file..."

  mysql -h $DB_HOST --port=$DB_PORT -u $DB_USER --password=$DB_PASS -p $DB_NAME --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < $file

  if [ $? -eq 0 ]; then
    echo "$file executed successfully."
  else
    echo "Error executing $file."
  fi
  
done