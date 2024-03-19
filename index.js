// UTILITY
function printValue(value){
    console.info(value);
}

// 1.0 DEFINE VARIABLES
// Fixed variable: budget yetu ndio fixed variable here ksh 10gz
const maxBudget = 10000;
console.log("You: hey msupa ulisema budget ya shopping ni how much?");
console.log("Liz: mmh.. actually Kai alisema ako na 5k na mimi niko na 2k na wewe uko na 3k so total ni  " + maxBudget + " gz");

// Redeclarable variable: weather iko aje mvua ama kajua?
let isRaining = false;
console.log("You: Kunakaa kunyesha though ama naona aje?");
console.log("Kai: We mzee acha Jaba kunyeshe na aka kajua my guy?");

// Re-assignable but not redeclarable variable: vitu tunabuy
let shoppingList = ["Milk", "Bread", "Eggs", "Vegetables", "Fruits"];
console.log("kai: Na tunabuy what guys like rada zenu...liz wapi shopping list brooo?");
console.log("Liz: We ntakupiga mimi usiniite bro. Griffins tunafaa kubuy: " + shoppingList.join(", ") + ".");

// 2.0 DIFFERENT DATA TYPES
// Fixed variable with a number value: ni vitu ngapi tunabuy ?
const numItemsOnList = 5;
console.log("You: AIII wait ngoja kwani ni list ya vitu ngapi in total?");
console.log("Kai: we kwani hujui hesabu it's just " + numItemsOnList + " items on our list.");

// Redeclarable variable with a boolean value: liz amebeba shopping bag?
let hasBasket = true;
console.log("You: Baby girl uko na shopping bag ama tutabuy?");
console.log("Liz: Yes, niko nayo mzee no need to buy.");

// Re-assignable variable with a string value: Tunabuy vitu wapi?
let shoppingLocation = "Naivas";
console.log("You: Alafu tunaenda kubuy wapi?");
console.log("Kai:  Twendeni Naivas ");

// 3.0 STRING OPERATIONS
// Concatenate string (+): tuna combine strings ndio tupate sticky note yetu ya shopping
let shoppingPlanMessage = ` ${shoppingLocation} , ${shoppingList.join(", ")} `;
console.log("You: Liz uko sawa tukienda " + shoppingLocation + "ama uko na other ideas?" );
console.log("Liz: Yes niko sawa, actually kubuy " + shoppingList.join(", ") + "ni cheaper ");

// Interpolate string (`${}`): Tume Insert variable kwa string ndio itupee  weather and shopping information
let weatherAndShoppingInfo = ` ${isRaining ? 'raining' : 'not raining'}.  ${shoppingLocation}  ${numItemsOnList} `;
console.log("You: na mjue niliwaambia kutanyesha but kai akasema ni " +  isRaining + "");
console.log("Kai: sasa ata wewe nikuulize kwani kutoka hapa hadi " + shoppingLocation + "ni dakika ngapi juu unaogopa mvua?");
console.log("Liz: alafu pia hatuendi kukaa si we are just buying " + numItemsOnList + "andd we are back kahiii!");

// Convert to uppercase: tueke caps
//let uppercaseShoppingPlan = shoppingPlanMessage.toUpperCase();
//console.log("You: na mjue niliwaambia kutanyesha but kai akasema ni " +  isRaining + "");
//console.log("Kai: sasa ata wewe nikuulize kwani kutoka hapa hadi " + shoppingLocation + "ni dakika ngapi juu unaogopa mvua?");
//console.log("Liz: alafu pia hatuendi kukaa si we are just buying " + numItemsOnList + "andd we are back kahiii!");


// Convert to lowercase: tueke small letters
//let lowercaseShoppingPlan = shoppingPlanMessage.toLowerCase();
//console.log("You: na mjue niliwaambia kutanyesha but kai akasema ni " +  isRaining + "");
//console.log("Kai: sasa ata wewe nikuulize kwani kutoka hapa hadi " + shoppingLocation + "ni dakika ngapi juu unaogopa mvua?");
//console.log("Liz: alafu pia hatuendi kukaa si we are just buying " + numItemsOnList + "andd we are back kahiii!");


// Index a specific character: tunabuy nini ya kwanza from the list
let firstCharacter = shoppingPlanMessage.charAt(1);
console.log("You: What are we buying first");
console.log("Liz: The first item should be '" + firstCharacter + "'.");

// 4.0 COMPARISON
//Tunacheck if the number of items on the list is exactly 5
let enoughItems = numItemsOnList === 5;
console.log("You: Are you sure tuko na kila kitu kwa list msee?");
console.log("Kai: Yes yes, tuko na a total of " + numItemsOnList + " items to buy");

//Tunacheck if the maximum budget is less than 12,000 Kenyan Shillings
let isWithinBudget = maxBudget < 10000;
console.log("You: Na mko sure hizo stuff ziko withing the budget?");
console.log("Liz: Yes, we are within our budget.");

//Tunacheck if the shopping location is a supermarket
let isSupermarket = shoppingLocation === 'Supermarket';
console.log("You: Aty mumesema tunaenda " +shoppingLocation+ "? Hamtaki sarit?");
console.log("Kai: Yes, we're going to "  +shoppingLocation+ "" );

//Tunacheck if the maximum budget is not equal to 12,000 Kenyan Shillings
let budgetNotEqual = maxBudget !== 12000;
console.log("You: Hatuwezi changa ifike ata 12k");
console.log("Liz: Weee hapana mimi ata pesa sina");

//Tunacheck if the maximum budget is greater than 8,000 Kenyan Shillings
let budgetGreaterThanThreshold = maxBudget > 8000;
console.log("You: Budget iko above 8k though right?");
console.log("Kai: Yes, our budget is greater than 8000.");

//Tunacheck if the maximum budget is less than 15,000 Kenyan Shillings
let budgetLessThanThreshold = maxBudget < 15000;
console.log("You: ooh i thought tunaeza fika 15k");
console.log("Liz: No, our budget is less than 15000.");

//Tunacheck if the maximum budget is greater than or equal to 10,000 Kenyan Shillings
//let budgetGreaterOrEqualToThreshold = maxBudget >= 10000;
//console.log("You: Is our budget greater than or equal to 10000 Kenyan Shillings?");
//console.log("Kai: Yes, our budget is greater than or equal to 10000.");

//Tunacheck if the maximum budget is less than or equal to 10,000 Kenyan Shillings
//let budgetLessOrEqualToThreshold = maxBudget <= 10000;
//console.log("You: Is our budget less than or equal to 10000 Kenyan Shillings?");
//console.log("Liz: Yes, our budget is less than or equal to 10000.");

// 5.0 CONTROL FLOW
// Example of if-else statement: Determines whether it's suitable to go shopping based on weather and having a basket
if (!isRaining && hasBasket) {
    printValue("You: So tunaeza enda?");
    printValue("Kai: Yes twende");
} else {
    printValue("You: So tunaeza enda?");
    printValue("Kai: zii It's not suitable to go shopping now due to rain .");
}

// Example of switch-case: Provides different messages based on the shopping location
switch (shoppingLocation) {
    case 'Supermarket':
        console.log("You: Where are we going for shopping?");
        console.log("Liz: We're going to the Naivas.");
        break;
    case 'Local market':
        console.log("You: Na kama Naivas imefungwa?");
        console.log("Liz: We're going to visit Kawangware for fresh produce.");
        break;
    default:
        console.log("You: Na si uko ni mbali");
        console.log("Liz: We wacha Twendeni.");
        break;
}
