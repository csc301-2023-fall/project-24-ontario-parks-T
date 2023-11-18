# set connections to database
DB_HOST="yilz-1.mysql.database.azure.com"
DB_USER="yilz"
DB_PASS="csc301P24!"
DB_NAME="test_database"

DB_PORT=3306

FILE="test_1.sql"

# execute the file
echo "Executing $FILE..."
mysql -h $DB_HOST --port=$DB_PORT -u $DB_USER --password=$DB_PASS -p $DB_NAME --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < $FILE

# check result
if [ $? -eq 0 ]; then
echo "$file executed successfully."
else
echo "Error executing $file."
fi
