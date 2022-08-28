// document.getElementById('logo').addEventListener(click,function(){
//     window.location.herf='./#'
// })

// document.getElementById('nav_search').addEventListener(click,function(){
//     document.getElementById('search_div').style.visibility="visible";
//     document.getElementById('search_div').style.transition="all 0.5s ease"
// })


export function navbar(){
    return`<div id="logo">
       

    <a href="./index.html"> <img src="https://assets.rha-audio.com/nzssx/c/Headphone_zone_logo_3-small.png" alt=""></a>
  </div>

<div class="nav_mega_menu">

    <ul>
        <li>
            <p>Category</p>
            <div class="nav_sub_menu">
            <table id="category_sec">
            <tr>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/3566/3566959.png" alt="">
                    <p>IN-EARS FOR BEGINNERS</p>
                </td>
                <td onclick="getthis_data2()">
                    <img src="https://cdn-icons-png.flaticon.com/512/8019/8019048.png" alt="">
                    <p>HEADPHONES FOR BEGINNERS</p>
                </td>
                <td onclick="getthis_data3()"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/5681/5681325.png" alt="">
                    <p>TRUE WIRELESS EARBUDS</p></td>
                <td onclick="getthis_data4()">      
                    <img src="https://cdn-icons-png.flaticon.com/512/3206/3206786.png" alt="">
                    <p>WIRELESS HEADPHONES</p></td>
                <td onclick="getthis_data5()">
                    <img src="https://cdn-icons-png.flaticon.com/512/8284/8284984.png" alt="">
                    <p>FLAGSHIP IEMS</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/8305/8305607.png" alt="">
                    <p>FLAGSHIP HEADPHONES</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/1544/1544805.png" alt="">
                    <p>HI-RES AUDIO PLAYERS</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/7386/7386518.png" alt="">
                    <p>PORTABLE AMPS & DACS</p>
                </td>
            </tr>
            
            <tr>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/2095/2095240.png" alt="">
                    <p>DESKTOP AMPS & DACS</p>
                </td>
                <td onclick="getthis_data6()">
                    <img src="https://cdn-icons-png.flaticon.com/512/2618/2618974.png" alt="">
                    <p>WORK FROM HOME</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/3142/3142080.png" alt="">
                    <p>GAMING</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/3613/3613243.png" alt="">
                    <p>STUDIO & PROFESSIONAL</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/7919/7919605.png" alt="">
                    <p>SPEAKERS</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/6323/6323608.png" alt="">
                    <p>CABLES</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/6907/6907871.png" alt="">
                    <p>EARTIPS & EARPADS</p>
                </td>
                <td onclick="getthis_data1()">
                    <img src="https://cdn-icons-png.flaticon.com/512/8051/8051228.png" alt="">
                    <p>CASES</p>
                </td>
            </tr>
        </table>
            </div>
      </li>

        <li>
            <p>Brands</p>
            <div class="nav_sub_menu" id="sub_menu_brands">
                <table>
                    <tr>
                        <td onclick="getBrand1()"><p>AUDIO-TECHNICA</p></td>
                        <td onclick="getBrand2()"><p>SONY</p></td>
                        <td onclick="getBrand3()"><p>BEYERDYNAMIC</p></td>
                        <td onclick="getBrand4()"><p>HIFIMAN</p></td>
                        <td onclick="getBrand5()"><p>SENNHEISER</p></td>
                    </tr>

                    <tr>
                        <td><p>BLON</p></td>
                        <td><p>CAMPFIRE AUDIO</p></td>
                        <td><p>TIMELESS</p></td>
                        <td><p>MEZE</p></td>
                        <td><p>FINAL</p></td>
                    </tr>

                    <tr>
                        <td><p>CCA</p></td>
                        <td><p>LYPERTEK</p></td>
                        <td><p>7HZ</p></td>
                        <td><p>SHURE</p></td>
                        <td><p>V-MODA</p></td>
                    </tr>
                </table>
            </div>
        </li>
        <li>
            <p>Price</p>
          <div class="nav_sub_menu" id="sub_menu_price">
            <tt>	
            <p>Best Headphones Under Rs 1,000</p>
            <p>Best Headphones Under Rs 2,000</p>
            <p>Best Headphones Under Rs 3,000</p>
            <p>Best Headphones Under Rs 5,000</p>
            <p>Best Headphones Under Rs 10,000</p>
            <p>Best Headphones Under Rs 20,000</p>
            <p>Best Headphones Under Rs 30,000</p>
            
           </tt>       
        </li>
        <li><p>Deals</p></li>
       
        <li><p>Events</p></li>
        <li><p>Forum</p></li>
        <li><p>Info</p>
            <div class="nav_sub_menu" id="sub_menu_info">
                <div class="col">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-10-Years_500x-1_295x.jpg?v=1643031208" alt="">
                    <h4>HISTORY OF HEADPHONE ZONE</h4>
                    <p>Read the Headphone Zone journey since 2011 as told by Raghav.</p>
                </div>
                <div class="col">
                    <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Club-Audiophile-Menu_500x-focal_256x256_c41abc2b-75a9-4aeb-b2cf-4f01ae7c1992_256x.webp?v=1650019007" alt="">
                    <h4>IT PLAYS TO BE AN AUDIOPHILE</h4>
                    <p>Enjoy Members-only rewards with our loyalty program</p>
                </div>
                <div class="col">
                    <h4>ABOUT US</h4>
                    <p>Our Story</p>
                    <P>Our Values</P>
                    <P>Meet the Team</P>
                    <P>Customer Testimonials</P>
                    <P>Careers-We're Hiring!</P>
                    <P>Brands That Inspire Us</P>
                </div>
                <div class="col">
                    <h4>GET IN TOUCH</h4>
                    <p>Contact the Team</p>
                    <p>Corporate Gifting</p>
                    <P>Partner With Us</P>
                </div>
                <div class="col">
                    <h4>COMMUNITY</h4>
                    <p>Headphone Zone Merchandise</p>
                    <p>Tread-Up Program</p>
                    <P>Affiliate Program</P>
                </div>
            </div>
        </li>
        <li id="helpcenter"><a href="https://help.headphonezone.in/support/home?_gl=1*c1jlxr*_ga*MTQ1NzE1NzA0LjE2NjEyMzMyNTk.*_ga_G4MJRJ9C7G*MTY2MTYwNDMyMi4yMi4xLjE2NjE2MDQzMjkuNTMuMC4w"><p> Help Center</p></a></li>
        
    </ul>
</div>

<div id="right_menu">
   
        <input type="text" id="nav_search" placeholder="Search">
        <a href="./login.html"><p id="navlogin">Login</p></a>
        <p>cart</p>
       
</div>`
}





