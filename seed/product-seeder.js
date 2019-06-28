var Product = require('../models/product');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true});

var products = [
      new Product({
      imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/FRANKING%20INK%20CARTRIDGE.JPG',
      title: 'FRANKING INK CARTRIDGE',
      description: 'Franking Machine Ink Cartridge for Head Office',
      price: 9000
   }),
   new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/CF283A%20BLACK.jpg',
    title: 'HP CF283A',
    description: 'HP CF283A Black Toner for Kakamega & Embu Branch Printer HP LaserJet PRO MFP M127FN',
    price: 8500
  }),
  new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/CF217A%20BLACK.png',
    title: 'HP CF217A',
    description: 'HP CF217A Black Toner for Bungoma Branch. Printer HP LaserJet Pro MFP M130Nw',
    price: 10000
  }),
  new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/CANON%20C-EXV33.jpg',
    title: 'CANON C-EXV33',
    description: 'Canon C-EXV33 Black Toner for Thika Branch. Printer Canon IR2520',
    price: 9500
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Epson-LQ-690-Ribbon-Cartridge.png',
    title: 'EPSON-LQ-690 Ribbon-Cartridge',
    description: 'Epson Black Ribbon Cartridge for EPSON-LQ-690 Dot Matrix Printer for Certificate, Receipt & Cheque printing',
    price: 3000
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/HP_Toner_CF413A_Magenta.jpg',
    title: 'HP CF413A MAGENTA TONER',
    description: 'HP CF413A MAGENTA Toner for HP Color LaserJet M452dn Executive Printer',
    price: 13000
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Hp_toner_CF411A_cyan2.jpg',
    title: 'HP CF411A CYAN TONER ',
    description: 'HP CF411A MAGENTA Toner for HP Color LaserJet M452dn Executive Printer',
    price: 13000
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/hp-cf412a%20Yellow.jpg',
    title: 'HP CF412A YELLOW TONER ',
    description: 'HP CF412A YELLOW Toner for HP Color LaserJet M452dn Executive Printer',
    price: 13000
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/HP_Toner_CF410A_Black.jpg',
    title: 'HP CF410A BLACK TONER',
    description: 'HP CF410A BLACK Toner for HP Color LaserJet M452dn Executive Printer',
    price: 13000
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Imation%20CD-R%2080Min%20700MB%2052x%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0.jpg',
    title: 'IMATION CD-RW',
    description: 'IMATION CD-RW',
    price: 200
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Imation%20DVD+R%20Double%20Layer%20(DL)%20240min%208.5GB%208X%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%20%C2%A0.jpg',
    title: 'IMATION LightScribe DVD+R',
    description: 'DVD+R',
    price: 205
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/White%20board%20Marker.jpg',
    title: 'WHITE BOARD MARKER PEN',
    description: 'MARKER PEN',
    price: 400
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Celotape.jpg',
    title: 'CELLO TAPE',
    description: 'CLEAR TAPE',
    price: 105
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Cover%20Notes.jpg',
    title: 'COVER NOTES',
    description: 'COVER NOTES',
    price: 300
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/Eyelet%20punch.jpg',
    title: 'EYELET PUNCH',
    description: 'Eyelet Punch',
    price: 2400
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/DUST%20BIN.jpg',
    title: 'DUST BIN',
    description: 'Dust Bin',
    price: 240
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/SCISSORS.jpg',
    title: 'SCISSORS',
    description: 'Scissors',
    price: 200
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/FLIP%20CHART.jpg',
    title: 'FLIP CHART',
    description: 'FLIP CHART',
    price: 17100
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/YELLOW%20STICK%20ONS.jpg',
    title: 'STICK NOTES',
    description: 'Stick Notes',
    price: 80
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/WHITE%20OUT.jpeg',
    title: 'BIC WHITE OUT',
    description: 'Quick Dry Correction Fluid',
    price: 200
 }),
 
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/STAPLERS.jpg',
    title: 'STAPLER',
    description: 'STAPLER',
    price: 800
 }),

 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/STAPLE%20REMOVERS.jpg',
    title: 'STAPLE REMOVER',
    description: 'Staples Remover',
    price: 100
 }),

 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/STAPLE%20PINS%20REXL%20246.jpg',
    title: 'STANDARD STAPLES PINS',
    description: 'Rapid Staples',
    price: 250
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/STAMP%20PAD%20INK.jpg',
    title: 'STAMP PAD INK',
    description: 'Pelikan Stamp Pad Ink without Oil',
    price: 310
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/RULERS.jpg',
    title: 'RULER',
    description: 'Ruler',
    price: 50
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/RUBBER%20BANDS.jpg',
    title: 'RUBBER BANDS',
    description: 'Rubber Bands',
    price: 100
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PRINTING%20PAPERS.jpg',
    title: 'HP A4 PLAIN PRINTING PAPER',
    description: 'Printing Paper',
    price: 450
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PENTAL%20PARMANENT%20MARKER%20PENS.jpg',
    title: 'PENTAL PARMANENT MARKER',
    description: 'Permanent Marker',
    price: 345
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PEN%20HOLDERS.jpg',
    title: 'DELI PEN STAND',
    description: 'Pen Holder',
    price: 9000
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PAPER%20PUNCHS.jpg',
    title: 'KANGAROO DP-600 PAPER PUNCH',
    description: 'Paper Punch',
    price: 320
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PAPER%20CLIPS%2050MM.jpg',
    title: 'PAPER CLIPS 50MM',
    description: 'Paper Clips',
    price: 100
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PAPER%20CLIPS%2028MM.jpg',
    title: 'PAPER CLIPS 28MM',
    description: 'Paper Clips',
    price: 35
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/LPO%20BOOKS.jpg',
    title: 'LPO BOOK',
    description: 'LPO Book',
    price: 200
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/LETTER%20HEAD%20PAPERS.jpg',
    title: 'LETTER HEAD PAPER',
    description: 'Pacis Branded Letterhead Printing Paper',
    price: 200
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/JUMBO%20ERASERS.jpg',
    title: 'JUMBO ERASER',
    description: 'Eraser',
    price: 40
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/HIGHLIGHTERS.jpg',
    title: 'PELIKAN HIGHLIGHTERS',
    description: 'Highlighter',
    price: 100
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/HB%20PENCILS.jpg',
    title: 'HB STAEDTLER PENCIL',
    description: 'Pencil',
    price: 40
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/GLUE%20STICK.jpg',
    title: 'GLUE STICK',
    description: 'Pritt Original',
    price: 450
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/PROJECT%20FOLDERS.jpg',
    title: 'PROJECT FOLDER',
    description: 'Project Folder',
    price: 100
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/FILE%20FASTENERS.jpg',
    title: 'FILE FASTENER',
    description: 'Deli 50sets 80mm Fastener',
    price: 205
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/EYELETS.jpg',
    title: 'EYELETS',
    description: 'Kangaroo BPE-20 Eyelets',
    price: 500
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/COUNTER%20BOOKS%20A%204.jpg',
    title: 'COUNTER BOOK',
    description: 'Kartasi Counter Book 2 Quire',
    price: 200
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/COMPLEMENTARY%20SLIPS.jpg',
    title: 'COMPLEMENTARY SLIPS',
    description: 'Pacis Branded Complementary Slips',
    price: 500
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/CALCULATOR.jpg',
    title: 'CALCULATOR',
    description: 'DELI DL-1121 Calculator',
    price: 510
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/BUSINESS%20CARD%20HOLDER.jpg',
    title: 'BUSINESS CARD HOLDER',
    description: 'Business Card Holder',
    price: 250
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/BOX%20FILE.jpg',
    title: 'BOX FILE',
    description: 'Box File',
    price: 445
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/BIROS%20(BLACK).jpg',
    title: 'BALL PEN',
    description: 'Ball Pen',
    price: 10
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/DL%20YELLOW%20ENVELOPES-%20CONQUEROR.jpg',
    title: 'DL YELLOW ENVELOPE',
    description: 'DLYellow Envelope',
    price: 45
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/A5%20SHORTHAND%20NOTBOOK.jpg',
    title: 'SHORT HAND NOTE BOOK',
    description: '144 Page Short Hand Note Book',
    price: 50
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/A5%20PACIS%20ENVELOPES.jpg',
    title: 'A5 PACIS ENVELOPES',
    description: 'A5 Branded A5 Envelope',
    price: 25
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/A2%20PACIS%20ENVELOPES.jpg',
    title: 'A2 PACIS BRANDED ENVELOPE',
    description: 'A2 Branded Envelope',
    price: 25
 }),
 new Product({
    imagePath: 'https://pacis-my.sharepoint.com/personal/skahuria_paciskenya_com/Documents/APP_DATA/INVENTORY_APP_IMAGES/A4%20PACIS%20ENVELOPES.jpg',
    title: 'A4 PACIS BRANDED ENVELOPE',
    description: 'A4 Branded Envelope',
    price: 25
   })
 ];

 var done =0;
 for (var i = 0; i < products.length; i++){
    products[i].save(function (err,result) {
       done++;
       if (done === products.length){
          exit();
       }
          
    });
 }

 function exit(){
   mongoose.disconnect();
 }
 