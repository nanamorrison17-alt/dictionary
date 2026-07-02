# dictionary
This is a simple dictionary in which a user can search, add and delete words and their meanings for everyday use. 

# USTACKY Dictionary

A web-based dictionary application built with **PHP, MySQL, AJAX, JavaScript, Bootstrap, HTML, and CSS**. The application allows users to search for words, add new words and meanings, update existing definitions, and delete words from the dictionary database.

---

## Features

* Search for words and instantly retrieve meanings using AJAX.
* Add new words and definitions.
* Update existing word meanings.
* Delete words from the dictionary.
* Responsive user interface powered by Bootstrap.
* Real-time communication between client and server without page reloads.
* Session-based success and error notifications.

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript
* AJAX

### Backend

* PHP

### Database

* MySQL

---

## Project Structure

```text
dictionary/
│
├── Bootstrap/
│   ├── css/
│   ├── js/
│
├── config/
│   ├── connectionDB.php
│   ├── wordSearch.php
│   ├── newWord.php
│   ├── deleteWord.php
│   └── submitUpdateWord.php
│
├── img/
│   └── search.jpg
│
├── index.php
├── new-word.php
├── update-word.php
├── mainscript.js
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ustacky-dictionary.git
```

### 2. Move Project to Web Server

For XAMPP:

```text
C:\xampp\htdocs\dictionary
```

### 3. Create Database

Open phpMyAdmin and create a database:

```sql
CREATE DATABASE dictionary_db;
```

### 4. Create Table

```sql
CREATE TABLE dictionary_resource (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    meaning TEXT NOT NULL
);
```

### 5. Configure Database Connection

Update the database credentials in:

```php
config/connectionDB.php
```

Example:

```php
<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "dictionary_db"
);

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}
?>
```

### 6. Run Application

Start Apache and MySQL in XAMPP and visit:

```text
http://localhost/dictionary
```

---

## Usage

### Search for a Word

1. Enter a word in the search box.
2. Click **Search**.
3. The meaning will be displayed instantly.

### Add a New Word

1. Click **New** from the navigation menu.
2. Enter the word and its meaning.
3. Click **Save**.

### Update a Word

1. Search for an existing word.
2. Click **Update**.
3. Modify the meaning.
4. Click **Save**.

### Delete a Word

1. Search for a word.
2. Click **Delete**.
3. The selected word will be removed from the database.

---

## AJAX Endpoints

| Endpoint               | Purpose                 |
| ---------------------- | ----------------------- |
| `wordSearch.php`       | Search for a word       |
| `newWord.php`          | Add a new word          |
| `submitUpdateWord.php` | Update an existing word |
| `deleteWord.php`       | Delete a word           |

---

## Future Improvements

* User authentication and authorization.
* Search history.
* Word categories.
* Pronunciation support.
* Example sentences.
* Favorite words feature.
* REST API integration.
* Pagination and advanced search filters.

---

## Author

**USTACKY Dictionary**

A simple and interactive dictionary management system for learning, searching, and managing word definitions.

---

## License

This project is open-source and available for educational and learning purposes.
