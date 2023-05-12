
import {React, Component} from 'react';
import './Style.css'
// import ChatBot from 'react-simple-chatbot';
// const steps = [
//   {
//       id: '0',
//       message: 'Hey!',
//       trigger: '1',
//   }, {
//       id: '1',
//       message: 'hi, how can I help you?',
//       trigger: '2',
   
//   },{
//     id: '2',
//     options: [

//         { value: 'v', label: ' vegitables' },
//         { value: 'f', label: 'Fruits' },
//         { value: 's', label: 'Snack' },
//         { value: 'b', label: 'Beverage' }
//     ],
//     trigger: '3',
// }, {
//       id: '3',
//       user: true,
//       trigger: '4',
//   },  {
//       id: '4',
//       options: [

//           { value: 1, label: 'View vegitables' },
//           { value: 2, label: 'View Fruits' },
    
       

//       ],
//       end: true
//   }
// ];

// // Creating our own theme
// const theme = {
//   background: '#C9FF8F',
//   headerBgColor: '#197B22',
//   headerFontSize: '20px',
//   botBubbleColor: '#0F3789',
//   headerFontColor: 'white',
//   botFontColor: 'white',
//   userBubbleColor: '#FF5733',
//   userFontColor: 'white',
// };

// // Set some properties of the bot
// const config = {
//   botAvatar: "img.png",
//   floating: true,
// };
class AboutUS extends Component{
   
        render(){
         return(
          
            //  <div className="chat"><ChatBot steps={steps}>Chat Here</ChatBot> </div> 

          <nav className="App">   <p><b><center>About Us</center></b><br></br><br></br>ShopKAro Private Limited is an Indian e-commerce company established in 2007. It started with a primary focus on online book sales and soon, expanded to lifestyle products, electronics, home essentials and groceries. Today, Flipkart is the biggest online Indian marketplace competing with the world leader Amazon.
           Since 2010, the company has made a number of acquisitions including Letsbuy, Myntra, Jabong, eBay India, etc. In addition to its main office in Bengaluru, Flipkart has branch offices at Delhi and Mumbai. Apart from India, the firm is registered in Singapore. In 2018, the US-based retail chain Walmart acquired majority stake in Flipkart.
           Recently, Flipkart has opened its R&D centre at Israel. This is in line with its latest acquisition of Israeli start-up Upstream Commerce. The centre is run by talented engineers from across the world.</p>
           </nav>
         );      
      
   }
}
export default AboutUS;

