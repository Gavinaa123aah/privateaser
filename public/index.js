'use strict';

//list of bats
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const bars = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'freemousse-bar',
  'pricePerHour': 50,
  'pricePerPerson': 20
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'solera',
  'pricePerHour': 100,
  'pricePerPerson': 40
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'la-poudriere',
  'pricePerHour': 250,
  'pricePerPerson': 80
}];

//list of current booking events
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful from step 4
const events = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'booker': 'esilv-bde',
  'barId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'time': 4,
  'persons': 8,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'booker': 'societe-generale',
  'barId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'time': 8,
  'persons': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'booker': 'otacos',
  'barId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'time': 5,
  'persons': 80,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'privateaser': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'eventId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'eventId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'eventId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'booker',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'bar',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'privateaser',
    'type': 'credit',
    'amount': 0
  }]
}];

console.log(bars);
console.log(events);
console.log(actors);

//step 1
var booking_price=[];

for(var i = 0;i<events.length;i++){
  var booking_price_id = events[i].barId;
  for(var j =0;j<bars.length;j++){
    if(booking_price_id == bars[j].id){
      let obj = new Object();
      var price = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
      obj["id"] = events[i].id;
      obj["price"] = price;
      booking_price.push(obj);
    }
  }
}

console.log(booking_price);

//step 2
var booking_price2=[]

for(i in events){
  for(j in bars){
    if(events[i].barId==bars[j].id){
      if(events[i].persons>=10 && events[i].persons<20){
        var pricePerPerson = bars[j].pricePerPerson*0.9
        let obj = new Object()
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * pricePerPerson;
        obj["id"] = events[i].id
        obj["price"] = price
        booking_price2.push(obj)
      }else if(events[i].persons>=20 && events[i].persons<60){
        var pricePerPerson = bars[j].pricePerPerson*0.7
        let obj = new Object()
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * pricePerPerson;
        obj["id"] = events[i].id
        obj["price"] = price
        booking_price2.push(obj)
      }else if(events[i].persons>=60){
        var pricePerPerson = bars[j].pricePerPerson*0.5
        let obj = new Object()
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * pricePerPerson;
        obj["id"] = events[i].id
        obj["price"] = price
        booking_price2.push(obj)
      }else{
        var pricePerPerson = bars[j].pricePerPerson
        let obj = new Object()
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * pricePerPerson;
        obj["id"] = events[i].id
        obj["price"] = price
        booking_price2.push(obj)
      }
    }
  }
}
console.log(booking_price2)

//step3
var booking_price3=[]

for(i in booking_price2){
  var commission = booking_price2[i].price * 0.3
  var insurance = commission*0.5
  var treasury = 1
  var privateaser = commission-insurance-treasury
  var obj_commission = new Object()
  obj_commission["insurance"] = insurance
  obj_commission["treasury"] = treasury
  obj_commission["privateaser"] = privateaser
  var obj = new Object()
  obj["id"]=booking_price2[i].id
  obj["commission"] = obj_commission
  booking_price3.push(obj)
}
console.log(booking_price3)

//step4
var booking_price4=[]
for (i in events){
  for(j in bars){
    if(events[i].barId==bars[j].id){ 
      var obj = new Object()
      obj["id"]=events[i].id
      var obj_options = new Object()
      obj_options["deductibleReduction"]=events[i].options.deductibleReduction
      obj["options"]=obj_options
      if(events[i].options.deductibleReduction==true){
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
        obj["price"]= price
      }else{
        var price = events[i].time * bars[j].pricePerHour + events[i].persons * bars[j].pricePerPerson;
        obj["price"]= price
      }
      booking_price4.push(obj)
      break;
    }
 
  }
}
console.log(booking_price4)

//step5
for(i in actors){
  for(j in booking_price2){
    if(actors[i].eventId==booking_price2[j].id){
      actors[i].payment[0].amount=booking_price2[j].price
    }
  }
  for(j in booking_price3){
    if(actors[i].eventId==booking_price3[j].id){
      actors[i].payment[1].amount=actors[i].payment[0].amount-booking_price3[j].commission["insurance"]-booking_price3[j].commission["treasury"]-booking_price3[j].commission["privateaser"]
      actors[i].payment[2].amount=booking_price3[j].commission["insurance"]
      actors[i].payment[3].amount=booking_price3[j].commission["treasury"]
      actors[i].payment[4].amount=booking_price3[j].commission["privateaser"]
    
    }

  }
}
console.log(actors)