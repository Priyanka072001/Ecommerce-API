# Ecommerce-API
<h4>Designed an API for an ecommerce platform admin to manage product inventory</h4>
<h3><i>Test your API’s using Postman  tool to view and send request or response respectively.</i></h3>
<h2>Project Setup</h2>
<ol>
  <li>Configure your mongoose connection using MongoDB</li>
   <li>Install the required dependencies/modules using npm install and run npm start</li>
   <li>Run the localhost server on the port:8080 and use Postman tool to view and send request or response. </li>
</ol>
<h2>Using Postman tool</h2>
<ul>
  <li> To view all the products use <code> <REQUIRED URL>/Product </code> and use <b>GET</b> request for this in the postman tool.</li>
  <li>To create a new data on DB use <code> <REQUIRED URL>/products/create </code> and use <b>POST</b> request for this in the postman tool and to send the data goto Body > select Raw > then select JSON from dropdown inside .</li>
  <li> To update a the product quantity use <code> <REQUIRED URL>/products/:id/update_quantity/?number=<newQuantity> </code> where newQuantity will be the new quanity for the product :id and use <b>POST</b> request for this in the postman tool.</li>
  <li>To delete a product from DB use <code> <REQUIRED URL>/products/:id </code> where id is the id of the product to be deleted and use <b>DELETE</b> request for this in the postman tool.</li>
</ul>
<br>
<br>
--------------------------------------------------------------<h1>THANK YOU</h1>-----------------------------------------------------------------------------------
