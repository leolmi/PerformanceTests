'use strict';

angular.module('testApp')
  .factory('compatibilityTestService', [
    function () {
      var _customers = [
        {"ID": 1,"CompanyName": "Super Mart of the West","Address": "702 SW 8th Street","City": "Bentonville","State": "Arkansas","Zipcode": 72716,"Phone": "(800) 555-2797","Fax": "(800) 555-2171","Website": "http://www.nowebsitesupermart.com"},
        {"ID": 2,"CompanyName": "Electronics Depot","Address": "2455 Paces Ferry Road NW","City": "Atlanta","State": "Georgia","Zipcode": 30339,"Phone": "(800) 595-3232","Fax": "(800) 595-3231","Website": "http://www.nowebsitedepot.com"},
        {"ID": 3,"CompanyName": "K&S Music","Address": "1000 Nicllet Mall","City": "Minneapolis","State": "Minnesota","Zipcode": 55403,"Phone": "(612) 304-6073","Fax": "(612) 304-6074","Website": "http://www.nowebsitemusic.com"},
        {"ID": 4,"CompanyName": "Tom's Club","Address": "999 Lake Drive","City": "Issaquah","State": "Washington","Zipcode": 98027,"Phone": "(800) 955-2292","Fax": "(800) 955-2293","Website": "http://www.nowebsitetomsclub.com"},
        {"ID": 5,"CompanyName": "E-Mart","Address": "3333 Beverly Rd","City": "Hoffman Estates","State": "Illinois","Zipcode": 60179,"Phone": "(847) 286-2500","Fax": "(847) 286-2501","Website": "http://www.nowebsiteemart.com"},
        {"ID": 6,"CompanyName": "Walters","Address": "200 Wilmot Rd","City": "Deerfield","State": "Illinois","Zipcode": 60015,"Phone": "(847) 940-2500","Fax": "(847) 940-2501","Website": "http://www.nowebsitewalters.com"},
        {"ID": 7,"CompanyName": "StereoShack","Address": "400 Commerce S","City": "Fort Worth","State": "Texas","Zipcode": 76102,"Phone": "(817) 820-0741","Fax": "(817) 820-0742","Website": "http://www.nowebsiteshack.com"},
        {"ID": 8,"CompanyName": "Circuit Town","Address": "2200 Kensington Court","City": "Oak Brook","State": "Illinois","Zipcode": 60523,"Phone": "(800) 955-2929","Fax": "(800) 955-9392","Website": "http://www.nowebsitecircuittown.com"},
        {"ID": 9,"CompanyName": "Premier Buy","Address": "7601 Penn Avenue South","City": "Richfield","State": "Minnesota","Zipcode": 55423,"Phone": "(612) 291-1000","Fax": "(612) 291-2001","Website": "http://www.nowebsitepremierbuy.com"},
        {"ID": 10,"CompanyName": "ElectrixMax","Address": "263 Shuman Blvd","City": "Naperville","State": "Illinois","Zipcode": 60563,"Phone": "(630) 438-7800","Fax": "(630) 438-7801","Website": "http://www.nowebsiteelectrixmax.com"},
        {"ID": 11,"CompanyName": "Video Emporium","Address": "1201 Elm Street","City": "Dallas","State": "Texas","Zipcode": 75270,"Phone": "(214) 854-3000","Fax": "(214) 854-3001","Website": "http://www.nowebsitevideoemporium.com"},
        {"ID": 12,"CompanyName": "Screen Shop","Address": "1000 Lowes Blvd","City": "Mooresville","State": "North Carolina","Zipcode": 28117,"Phone": "(800) 445-6937","Fax": "(800) 445-6938","Website": "http://www.nowebsitescreenshop.com"},
        {"ID": 13,"CompanyName": "Braeburn","Address": "1 Infinite Loop","City": "Cupertino","State": "California","Zipcode": 95014,"Phone": "(408) 996-1010","Fax": "(408) 996-1012","Website": "http://www.nowebsitebraeburn.com"},
        {"ID": 14,"CompanyName": "PriceCo","Address": "30 Hunter Lane","City": "Camp Hill","State": "Pennsylvania","Zipcode": 17011,"Phone": "(717) 761-2633","Fax": "(717) 761-2334","Website": "http://www.nowebsitepriceco.com"},
        {"ID": 15,"CompanyName": "Ultimate Gadget","Address": "1557 Watson Blvd","City": "Warner Robbins","State": "Georgia","Zipcode": 31093,"Phone": "(995) 623-6785","Fax": "(995) 623-6786","Website": "http://www.nowebsiteultimategadget.com"},
        {"ID": 16,"CompanyName": "EZ Stop","Address": "618 Michillinda Ave.","City": "Arcadia","State": "California","Zipcode": 91007,"Phone": "(626) 265-8632","Fax": "(626) 265-8633","Website": "http://www.nowebsiteezstop.com"},
        {"ID": 17,"CompanyName": "Clicker","Address": "1100 W. Artesia Blvd.","City": "Compton","State": "California","Zipcode": 90220,"Phone": "(310) 884-9000","Fax": "(310) 884-9001","Website": "http://www.nowebsiteclicker.com"},
        {"ID": 18,"CompanyName": "Store of America","Address": "2401 Utah Ave. South","City": "Seattle","State": "Washington","Zipcode": 98134,"Phone": "(206) 447-1575","Fax": "(206) 447-1576","Website": "http://www.nowebsiteamerica.com"},
        {"ID": 19,"CompanyName": "Zone Toys","Address": "1945 S Cienega Boulevard","City": "Los Angeles","State": "California","Zipcode": 90034,"Phone": "(310) 237-5642","Fax": "(310) 237-5643","Website": "http://www.nowebsitezonetoys.com"},
        {"ID": 20,"CompanyName": "ACME","Address": "2525 E El Segundo Blvd","City": "El Segundo","State": "California","Zipcode": 90245,"Phone": "(310) 536-0611","Fax": "(310) 536-0612","Website": "http://www.nowebsiteacme.com"}
      ];

      var _products = [
        { "ProductID": 1, "ProductName": "Chai", "CategoryName": "Beverages", "ImageUrl": "../../images/samples/nw/categories/1.png", "InStock": 39 },
        { "ProductID": 2, "ProductName": "Chang", "CategoryName": "Beverages", "ImageUrl": "../../images/samples/nw/categories/1.png", "InStock": 17 },
        { "ProductID": 3, "ProductName": "Aniseed Syrup", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 13 },
        { "ProductID": 4, "ProductName": "Chef Anton\u0027s Cajun Seasoning", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 53 },
        { "ProductID": 5, "ProductName": "Chef Anton\u0027s Gumbo Mix", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 0 },
        { "ProductID": 6, "ProductName": "Grandma\u0027s Boysenberry Spread", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 120 },
        { "ProductID": 7, "ProductName": "Uncle Bob\u0027s Organic Dried Pears", "CategoryName": "Produce", "ImageUrl": "../../images/samples/nw/categories/7.png", "InStock": 15 },
        { "ProductID": 8, "ProductName": "Northwoods Cranberry Sauce", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 6 },
        { "ProductID": 9, "ProductName": "Mishi Kobe Niku", "CategoryName": "Meat/Poultry", "ImageUrl": "../../images/samples/nw/categories/6.png", "InStock": 29 },
        { "ProductID": 10, "ProductName": "Ikura", "CategoryName": "Seafood", "ImageUrl": "../../images/samples/nw/categories/8.png", "InStock": 31 },
        { "ProductID": 11, "ProductName": "Queso Cabrales", "CategoryName": "Dairy Products", "ImageUrl": "../../images/samples/nw/categories/4.png", "InStock": 22 },
        { "ProductID": 12, "ProductName": "Queso Manchego La Pastora", "CategoryName": "Dairy Products", "ImageUrl": "../../images/samples/nw/categories/4.png", "InStock": 86 },
        { "ProductID": 13, "ProductName": "Konbu", "CategoryName": "Seafood", "ImageUrl": "../../images/samples/nw/categories/8.png", "InStock": 24 },
        { "ProductID": 14, "ProductName": "Tofu", "CategoryName": "Produce", "ImageUrl": "../../images/samples/nw/categories/7.png", "InStock": 35 },
        { "ProductID": 15, "ProductName": "Genen Shouyu", "CategoryName": "Condiments", "ImageUrl": "../../images/samples/nw/categories/2.png", "InStock": 39 },
        { "ProductID": 16, "ProductName": "Pavlova", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 29 },
        { "ProductID": 17, "ProductName": "Alice Mutton", "CategoryName": "Meat/Poultry", "ImageUrl": "../../images/samples/nw/categories/6.png", "InStock": 0 },
        { "ProductID": 18, "ProductName": "Carnarvon Tigers", "CategoryName": "Seafood", "ImageUrl": "../../images/samples/nw/categories/8.png", "InStock": 42 },
        { "ProductID": 19, "ProductName": "Teatime Chocolate Biscuits", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 25 },
        { "ProductID": 20, "ProductName": "Sir Rodney\u0027s Marmalade", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 40 },
        { "ProductID": 21, "ProductName": "Sir Rodney\u0027s Scones", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 3 },
        { "ProductID": 22, "ProductName": "Gustaf\u0027s Knäckebröd", "CategoryName": "Grains/Cereals", "ImageUrl": "../../images/samples/nw/categories/5.png", "InStock": 104 },
        { "ProductID": 23, "ProductName": "Tunnbröd", "CategoryName": "Grains/Cereals", "ImageUrl": "../../images/samples/nw/categories/5.png", "InStock": 61 },
        { "ProductID": 24, "ProductName": "Guaraná Fantástica", "CategoryName": "Beverages", "ImageUrl": "../../images/samples/nw/categories/1.png", "InStock": 20 },
        { "ProductID": 25, "ProductName": "NuNuCa Nuß-Nougat-Creme", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 76 },
        { "ProductID": 26, "ProductName": "Gumbär Gummibärchen", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 15 },
        { "ProductID": 27, "ProductName": "Schoggi Schokolade", "CategoryName": "Confections", "ImageUrl": "../../images/samples/nw/categories/3.png", "InStock": 49 },
        { "ProductID": 28, "ProductName": "Rössle Sauerkraut", "CategoryName": "Produce", "ImageUrl": "../../images/samples/nw/categories/7.png", "InStock": 26 },
        { "ProductID": 29, "ProductName": "Thüringer Rostbratwurst", "CategoryName": "Meat/Poultry", "ImageUrl": "../../images/samples/nw/categories/6.png", "InStock": 0 },
        { "ProductID": 30, "ProductName": "Nord-Ost Matjeshering", "CategoryName": "Seafood", "ImageUrl": "../../images/samples/nw/categories/8.png", "InStock": 10 }
      ];
      var _chartdata = [
        { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
        { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
        { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
        { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
        { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
      ];

      var _tests = [];

      function addTest(info) {
        _tests.push(info);
      }

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }



      return {
        tests: _tests,
        customers:_customers,
        products: _products,
        chartdata: _chartdata,
        addTest: addTest,
        getRandomColor: getRandomColor
      }
    }]);
