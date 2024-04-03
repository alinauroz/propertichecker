# PropertiChecker

[//]: # (## Screenshots)

[//]: # (![App Screenshot]&#40;https://via.placeholder.com/468x300?text=App+Screenshot+Here&#41;)

### Setup Instructions

Clone the project

```bash
  git clone https://github.com/alinauroz//PropertiChecker.git
```

Go to the project directory

```bash
  cd PropertiChecker
```

Only Install packages

```bash
  composer install
```

Copy .env File

```bash
  cp .env.example .env
```

Configure ENV Variables

`DB_HOST`

`DB_PORT`

`DB_DATABASE`

`DB_USERNAME`

`DB_PASSWORD`

Run Migrations

```bash
  php artisan migrate
```

Run Database seeder to create Permissions & Roles

```bash
  php artisan db:seed
```

Start the server

```bash
  php artisan serve
```


Add empty text file in Storage Folder

```bash
  installed
```

Default Credentials for Super Admin

```bash
  admin@gmail.com
  admin123
```
