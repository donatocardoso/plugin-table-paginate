# Plugin-Paginate-Table

Version 1.0
------------------

- This plugin aims to perform the pagination of a table, has the navigation function between the pages and you can choose the number of lines that are displayed.

#### Documentation:

- To use this plugin you need to make use of your CSS and SCRIPT code. It is necessary that the table has an ID.

#### Example:

  ```javascript
  <table id="tbTest"></table>
  ```
- And it is only necessary to call the PAGINATE function and, if necessary, pass the desired number of lines per page as parameters, by default there is 5 (five) rows:

  ```javascript
  $("#tbTest").paginate();
  ```


- You can also choose which page the table will begin to display:

  ```javascript
  $("#tbTest").paginate(5, 2);
  ```
     
