function emailFun() {
  emailBodyStart="Hi Immensetec, I am interested in knowing more about  ";
  emailBodyEnd=" Please reach out to me at <your phone number please>";
  //put the type of hiring here. " hiring with immensetec " if no hiring type is selected
  hiring=" hiring ";
  //keep blank if no vertical is provided
  verticals="";
  hire_element = document.getElementById("hire");
  hire_val=hire_element.value;
  switch(hire_val){
  case "general":
    hiring = " hring ";
    break;
  case "direct":
    hiring = " direct hiring ";
    break;
  case "contract";
    hiring = " contract hiring ";
    break;
  default :
    hiring = " hiring ";
  }
  vertical_element = document.getElementById("bus_vertical");
  vertical_val=vertical_element.value;
  switch(vertical_val){
  case "any":
    verticals = "";
        break;
  case "energy":
    verticals " for Energy and Utilities ";
        break;
  case "consult":
    verticals=" for Consulting and Professional Services ";
        break;
  case "edu":
    verticals = " for Education ";
      break;
  case "ngo":
    verticals = " for Non-profit and NGOs ";
      break;
  case "auto":
    verticals = " for Automtive ";
        break;
  case "eng":
    verticals = " for Engineering ";
        break;
  case "retail":
    verticals = " for Retail and E-commerce ";
        break;
  case "logi":
    verticals = " for Manufacturing and Logistics ";
        break;
  case "tour":
    verticals = " for Hospitality and tourism ";
        break;
  case "media":
    verticals = " for Media and Entertainment ";
        break;
  case "tech":
    verticals = " for Technology ";
        break;
  case "health":
    verticals = " for Healthcare ";
        break;
  case "fin":
    verticals = " for Finance and Accounting ";
        break;
  case "ads":
    verticals = " for Marketing and advertising ";
        break;
  case "prop":
    verticals = " for Real Estate and Property Management ";
        break;
  defualt:
    verticals = " ";
        break;
  }
emailBodyStart=emailBodyStart+hiring+verticals+"."+emailBodyEnd;
subject="Hiring with Immensetec";
encoded_body=encodeURIComponent(emailBodyStart);
encoded_subject=encodeURIComponent(subject);
window.location.href = "mailto:hrimmensetec@outlook.com?subject="+encoded_subject+"body="+encoded_body;
}