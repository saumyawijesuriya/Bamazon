var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Yasodara@1",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayProduct();    
    
  });
  
  
  function displayProduct() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("***************************************************************************");
      start();
    });
 }

  function start() {  
    
    inquirer
      .prompt([          
        {
        
        type: "input",
        name: "productId",
        message: "Please Enter the Product ID"
      },
      
    {
        type: "input",
        name: "units",
        message: "How Many Units Do You Need???"
    }
    ])
      .then(function(answer) {
          var itemId= answer.productId;
          var units= answer.units;

        connection.query("SELECT * FROM products WHERE ?", {item_id:itemId},
        function(err, res) {
        if (err) throw err;

        if (res.length ===0) {
        console.log("ERROR!!!, ITEM ID DOES NOT EXIST,PLEASE ENTER A VALID ITEM ID\n");
        displayProduct();
        }
        else{
            if(units<=res[0].stock_quantity){
        console.log("YOUR PRODUCT IS AVAILABLE IN STOCKS, YOUR ORDER IS PLACED!!\n")

        var updateQuantity ="UPDATE products SET stock_quantity = " + (res[0].stock_quantity-units)
                            +" WHERE item_id = " + itemId;
        
           connection.query(updateQuantity,function(err, data){
            if (err) throw err;

            console.log("TOTAL COST OF YOUR ORDER IS - $ " + res[0].price * units );
            console.log("!!!THANK YOU FOR YOUR BUSINESS!!!\n");
            console.log("****************************************************************\n");
            orderContinue();
           });                 
        }

        else{
            console.log("SORRY, INSUFFICIANT QUANTITY!!\n");
            console.log("PLEASE ENTER A VALID QUANTITY\n");
            console.log("WE HAVE ONLY AVAILABE "+ units<=res[0].stock_quantity + "OF ITEM : " + res[0].product_name +"\n");
            orderContinue();
        }
        }
         
        
      });
  });
}
 
function orderContinue(){
    inquirer.prompt([
        {
          type: "confirm",
          message: " would you like to continue shopping?" ,
          name: "confirm" 
        }
    ]).then(function(res){
        if(res.confirm){
            console.log("*******************************************************************\n");
            displayProduct();
        }
        else{
            console.log("THANK YOU FOR SHOPPING WITH BAMAZON")
            connection.end();
        }
    })

}
  