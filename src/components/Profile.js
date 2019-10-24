import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload';


import { store } from '../config/configureStore';

import { setFormData, setOfficePhotos } from '../actions/profile.js';


class Profile extends (Component) {
  constructor(props) {
    super(props);
    this.state = { ...this.props.state };
    //   {
    //   companyName: this.props.state.companyName,
    //   companyCountry: this.props.state.companyCountry,
    //   companyStateProvinceRegion: this.props.state.companyStateProvinceRegion,
    //   companyCity: this.props.state.companyCity,
    //   companyPostalCode:this.props.state.companyPostalCode,
    //   companyStreet:this.props.state.companyStreet,
    //   companyStreet2:this.props.state.companyStreet2,
    //   companyWebSite:this.props.state.companyWebSite,
    //   companyOwnerFirstName:this.props.state.companyOwnerFirstName,
    //   companyOwnerLastName:this.props.state.companyOwnerLastName,
    //   companyOwnerPhone:this.props.state.companyOwnerPhone,
    //   companyOwnerEmail:this.props.state.companyOwnerEmail,
    //   companyTradeName:this.props.state.companyTradeName,
    //   companyPhone:this.props.state.companyPhone,
    //   companyPhoneAdditional:this.props.state.companyPhoneAdditional,
    //   companyWhatsApp:this.props.state.companyWhatsApp,
    //   companyTelegramId:this.props.state.companyTelegramId,
    //   companyViber:this.props.state.companyViber,
    //   companyWeChatId:this.props.state.companyWeChatId,
    //   companyEmail:this.props.state.companyEmail,
    //   sunday:this.props.state.sunday,
    //   monday:this.props.state.monday,
    //   tuesday:this.props.state.tuesday,
    //   wednesday:this.props.state.wednesday,
    //   thursday:this.props.state.thursday,
    //   friday:this.props.state.friday,
    //   saturday:this.props.state.saturday,
    // }
  }


  componentDidMount() {


  }

  componentDidUpdate() {
    // store.dispatch(setFormData(
    //   {
    //     companyName: this.state.companyName,
    //     companyCountry: this.state.companyCountry,
    //     companyStateProvinceRegion: this.state.companyStateProvinceRegion,
    //     companyCity: this.state.companyCity,
    //     companyPostalCode:this.state.companyPostalCode,
    //     companyStreet:this.state.companyStreet,
    //     companyStreet2:this.state.companyStreet2,
    //     companyWebSite:this.state.companyWebSite,
    //     companyOwnerFirstName:this.state.companyOwnerFirstName,
    //     companyOwnerLastName:this.state.companyOwnerLastName,
    //     companyOwnerPhone:this.state.companyOwnerPhone,
    //     companyOwnerEmail:this.state.companyOwnerEmail,
    //     companyTradeName:this.state.companyTradeName,
    //     companyPhone:this.state.companyPhone,
    //     companyPhoneAdditional:this.state.companyPhoneAdditional,
    //     companyWhatsApp:this.state.companyWhatsApp,
    //     companyTelegramId:this.state.companyTelegramId,
    //     companyViber:this.state.companyViber,
    //     companyWeChatId:this.state.companyWeChatId,
    //     companyEmail:this.state.companyEmail,
    //     sunday:this.state.sunday,
    //     monday:this.state.monday,
    //     tuesday:this.state.tuesday,
    //     wednesday:this.state.wednesday,
    //     thursday:this.state.thursday,
    //     friday:this.state.friday,
    //     saturday:this.state.saturday,
    //   }
    // ));
    // console.log(store.getState());
  }


  componentWillUnmount() {
    // console.log("App mounted");
    // alert()
  }


  setReduxStore() {

  }


  handleClick() {
    alert('Clicked');
  }


  renderWorkHours() {
    return (
      <>
        <option value="day off">___</option>

        <option value="0:00">0:00</option>

        <option value="0:15">0:15</option>

        <option value="0:30">0:30</option>

        <option value="0:45">0:45</option>

        <option value="1:00">1:00</option>

        <option value="1:15">1:15</option>

        <option value="1:30">1:30</option>

        <option value="1:45">1:45</option>

        <option value="2:00">2:00</option>

        <option value="2:15">2:15</option>

        <option value="2:30">2:30</option>

        <option value="2:45">2:45</option>

        <option value="3:00">3:00</option>

        <option value="3:15">3:15</option>

        <option value="3:30">3:30</option>

        <option value="3:45">3:45</option>

        <option value="4:00">4:00</option>

        <option value="4:15">4:15</option>

        <option value="4:30">4:30</option>

        <option value="4:45">4:45</option>

        <option value="5:00">5:00</option>

        <option value="5:15">5:15</option>

        <option value="5:30">5:30</option>

        <option value="5:45">5:45</option>

        <option value="6:00">6:00</option>

        <option value="6:15">6:15</option>

        <option value="6:30">6:30</option>

        <option value="6:45">6:45</option>

        <option value="7:00">7:00</option>

        <option value="7:15">7:15</option>

        <option value="7:30">7:30</option>

        <option value="7:45">7:45</option>

        <option value="8:00">8:00</option>

        <option value="8:15">8:15</option>

        <option value="8:30">8:30</option>

        <option value="8:45">8:45</option>

        <option value="9:00">9:00</option>

        <option value="9:15">9:15</option>

        <option value="9:30">9:30</option>

        <option value="9:45">9:45</option>

        <option value="10:00">10:00</option>

        <option value="10:15">10:15</option>

        <option value="10:30">10:30</option>

        <option value="10:45">10:45</option>

        <option value="11:00">11:00</option>

        <option value="11:15">11:15</option>

        <option value="11:30">11:30</option>

        <option value="11:45">11:45</option>

        <option value="12:00">12:00</option>

        <option value="12:15">12:15</option>

        <option value="12:30">12:30</option>

        <option value="12:45">12:45</option>

        <option value="13:00">13:00</option>

        <option value="13:15">13:15</option>

        <option value="13:30">13:30</option>

        <option value="13:45">13:45</option>

        <option value="14:00">14:00</option>

        <option value="14:15">14:15</option>

        <option value="14:30">14:30</option>

        <option value="14:45">14:45</option>

        <option value="15:00">15:00</option>

        <option value="15:15">15:15</option>

        <option value="15:30">15:30</option>

        <option value="15:45">15:45</option>

        <option value="16:00">16:00</option>

        <option value="16:15">16:15</option>

        <option value="16:30">16:30</option>

        <option value="16:45">16:45</option>

        <option value="17:00">17:00</option>

        <option value="17:15">17:15</option>

        <option value="17:30">17:30</option>

        <option value="17:45">17:45</option>

        <option value="18:00">18:00</option>

        <option value="18:15">18:15</option>

        <option value="18:30">18:30</option>

        <option value="18:45">18:45</option>

        <option value="19:00">19:00</option>

        <option value="19:15">19:15</option>

        <option value="19:30">19:30</option>

        <option value="19:45">19:45</option>

        <option value="20:00">20:00</option>

        <option value="20:15">20:15</option>

        <option value="20:30">20:30</option>

        <option value="20:45">20:45</option>

        <option value="21:00">21:00</option>

        <option value="21:15">21:15</option>

        <option value="21:30">21:30</option>

        <option value="21:45">21:45</option>

        <option value="22:00">22:00</option>

        <option value="22:15">22:15</option>

        <option value="22:30">22:30</option>

        <option value="22:45">22:45</option>

        <option value="23:00">23:00</option>

        <option value="23:15">23:15</option>

        <option value="23:30">23:30</option>

        <option value="23:45">23:45</option>
      </>
    );
  }


  renderCountryCode() {
    return (
      <>
        <option value="">---------</option>

        <option value="+93">Afghanistan +93</option>

        <option value="+355">Albania +355</option>

        <option value="+213">Algeria +213</option>

        <option value="+1">American Samoa +1</option>

        <option value="+376">Andorra +376</option>

        <option value="+244">Angola +244</option>

        <option value="+1">Anguilla +1</option>

        <option value="+1">Antigua &amp; Barbuda +1</option>

        <option value="+54">Argentina +54</option>

        <option value="+374">Armenia +374</option>

        <option value="+297">Aruba +297</option>

        <option value="+247">Ascension Island +247</option>

        <option value="+61">Australia +61</option>

        <option value="+43">Austria +43</option>

        <option value="+994">Azerbaijan +994</option>

        <option value="+1">Bahamas +1</option>

        <option value="+973">Bahrain +973</option>

        <option value="+880">Bangladesh +880</option>

        <option value="+1">Barbados +1</option>

        <option value="+375">Belarus +375</option>

        <option value="+32">Belgium +32</option>

        <option value="+501">Belize +501</option>

        <option value="+229">Benin +229</option>

        <option value="+1">Bermuda +1</option>

        <option value="+975">Bhutan +975</option>

        <option value="+591">Bolivia +591</option>

        <option value="+387">Bosnia &amp; Herzegovina +387</option>

        <option value="+267">Botswana +267</option>

        <option value="+55">Brazil +55</option>

        <option value="+246">British Indian Ocean Territory +246</option>

        <option value="+1">British Virgin Islands +1</option>

        <option value="+673">Brunei +673</option>

        <option value="+359">Bulgaria +359</option>

        <option value="+226">Burkina Faso +226</option>

        <option value="+257">Burundi +257</option>

        <option value="+855">Cambodia +855</option>

        <option value="+237">Cameroon +237</option>

        <option value="+1">Canada +1</option>

        <option value="+238">Cape Verde +238</option>

        <option value="+599">Caribbean Netherlands +599</option>

        <option value="+1">Cayman Islands +1</option>

        <option value="+236">Central African Republic +236</option>

        <option value="+235">Chad +235</option>

        <option value="+56">Chile +56</option>

        <option value="+86">China +86</option>

        <option value="+61">Christmas Island +61</option>

        <option value="+61">Cocos (Keeling) Islands +61</option>

        <option value="+57">Colombia +57</option>

        <option value="+269">Comoros +269</option>

        <option value="+242">Congo - Brazzaville +242</option>

        <option value="+243">Congo - Kinshasa +243</option>

        <option value="+682">Cook Islands +682</option>

        <option value="+506">Costa Rica +506</option>

        <option value="+385">Croatia +385</option>

        <option value="+53">Cuba +53</option>

        <option value="+599">Curaçao +599</option>

        <option value="+357">Cyprus +357</option>

        <option value="+420">Czech Republic +420</option>

        <option value="+225">Côte d’Ivoire +225</option>

        <option value="+45">Denmark +45</option>

        <option value="+253">Djibouti +253</option>

        <option value="+1">Dominica +1</option>

        <option value="+1">Dominican Republic +1</option>

        <option value="+593">Ecuador +593</option>

        <option value="+20">Egypt +20</option>

        <option value="+503">El Salvador +503</option>

        <option value="+240">Equatorial Guinea +240</option>

        <option value="+291">Eritrea +291</option>

        <option value="+372">Estonia +372</option>

        <option value="+251">Ethiopia +251</option>

        <option value="+500">Falkland Islands +500</option>

        <option value="+298">Faroe Islands +298</option>

        <option value="+679">Fiji +679</option>

        <option value="+358">Finland +358</option>

        <option value="+33">France +33</option>

        <option value="+594">French Guiana +594</option>

        <option value="+689">French Polynesia +689</option>

        <option value="+241">Gabon +241</option>

        <option value="+220">Gambia +220</option>

        <option value="+995">Georgia +995</option>

        <option value="+49">Germany +49</option>

        <option value="+233">Ghana +233</option>

        <option value="+350">Gibraltar +350</option>

        <option value="+30">Greece +30</option>

        <option value="+299">Greenland +299</option>

        <option value="+1">Grenada +1</option>

        <option value="+590">Guadeloupe +590</option>

        <option value="+1">Guam +1</option>

        <option value="+502">Guatemala +502</option>

        <option value="+44">Guernsey +44</option>

        <option value="+224">Guinea +224</option>

        <option value="+245">Guinea-Bissau +245</option>

        <option value="+592">Guyana +592</option>

        <option value="+509">Haiti +509</option>

        <option value="+504">Honduras +504</option>

        <option value="+852">Hong Kong SAR China +852</option>

        <option value="+36">Hungary +36</option>

        <option value="+354">Iceland +354</option>

        <option value="+91">India +91</option>

        <option value="+62">Indonesia +62</option>

        <option value="+98">Iran +98</option>

        <option value="+964">Iraq +964</option>

        <option value="+353">Ireland +353</option>

        <option value="+44">Isle of Man +44</option>

        <option value="+972">Israel +972</option>

        <option value="+39">Italy +39</option>

        <option value="+1">Jamaica +1</option>

        <option value="+81">Japan +81</option>

        <option value="+44">Jersey +44</option>

        <option value="+962">Jordan +962</option>

        <option value="+7">Kazakhstan +7</option>

        <option value="+254">Kenya +254</option>

        <option value="+686">Kiribati +686</option>

        <option value="+965">Kuwait +965</option>

        <option value="+996">Kyrgyzstan +996</option>

        <option value="+856">Laos +856</option>

        <option value="+371">Latvia +371</option>

        <option value="+961">Lebanon +961</option>

        <option value="+266">Lesotho +266</option>

        <option value="+231">Liberia +231</option>

        <option value="+218">Libya +218</option>

        <option value="+423">Liechtenstein +423</option>

        <option value="+370">Lithuania +370</option>

        <option value="+352">Luxembourg +352</option>

        <option value="+853">Macau SAR China +853</option>

        <option value="+389">Macedonia +389</option>

        <option value="+261">Madagascar +261</option>

        <option value="+265">Malawi +265</option>

        <option value="+60">Malaysia +60</option>

        <option value="+960">Maldives +960</option>

        <option value="+223">Mali +223</option>

        <option value="+356">Malta +356</option>

        <option value="+692">Marshall Islands +692</option>

        <option value="+596">Martinique +596</option>

        <option value="+222">Mauritania +222</option>

        <option value="+230">Mauritius +230</option>

        <option value="+262">Mayotte +262</option>

        <option value="+52">Mexico +52</option>

        <option value="+691">Micronesia +691</option>

        <option value="+373">Moldova +373</option>

        <option value="+377">Monaco +377</option>

        <option value="+976">Mongolia +976</option>

        <option value="+382">Montenegro +382</option>

        <option value="+1">Montserrat +1</option>

        <option value="+212">Morocco +212</option>

        <option value="+258">Mozambique +258</option>

        <option value="+95">Myanmar (Burma) +95</option>

        <option value="+264">Namibia +264</option>

        <option value="+674">Nauru +674</option>

        <option value="+977">Nepal +977</option>

        <option value="+31">Netherlands +31</option>

        <option value="+687">New Caledonia +687</option>

        <option value="+64">New Zealand +64</option>

        <option value="+505">Nicaragua +505</option>

        <option value="+227">Niger +227</option>

        <option value="+234">Nigeria +234</option>

        <option value="+683">Niue +683</option>

        <option value="+672">Norfolk Island +672</option>

        <option value="+850">North Korea +850</option>

        <option value="+1">Northern Mariana Islands +1</option>

        <option value="+47">Norway +47</option>

        <option value="+968">Oman +968</option>

        <option value="+92">Pakistan +92</option>

        <option value="+680">Palau +680</option>

        <option value="+970">Palestinian Territories +970</option>

        <option value="+507">Panama +507</option>

        <option value="+675">Papua New Guinea +675</option>

        <option value="+595">Paraguay +595</option>

        <option value="+51">Peru +51</option>

        <option value="+63">Philippines +63</option>

        <option value="+48">Poland +48</option>

        <option value="+351">Portugal +351</option>

        <option value="+1">Puerto Rico +1</option>

        <option value="+974">Qatar +974</option>

        <option value="+40">Romania +40</option>

        <option value="+7">Russia +7</option>

        <option value="+250">Rwanda +250</option>

        <option value="+262">Réunion +262</option>

        <option value="+685">Samoa +685</option>

        <option value="+378">San Marino +378</option>

        <option value="+966">Saudi Arabia +966</option>

        <option value="+221">Senegal +221</option>

        <option value="+381">Serbia +381</option>

        <option value="+248">Seychelles +248</option>

        <option value="+232">Sierra Leone +232</option>

        <option value="+65">Singapore +65</option>

        <option value="+1">Sint Maarten +1</option>

        <option value="+421">Slovakia +421</option>

        <option value="+386">Slovenia +386</option>

        <option value="+677">Solomon Islands +677</option>

        <option value="+252">Somalia +252</option>

        <option value="+27">South Africa +27</option>

        <option value="+82">South Korea +82</option>

        <option value="+211">South Sudan +211</option>

        <option value="+34">Spain +34</option>

        <option value="+94">Sri Lanka +94</option>

        <option value="+590">St. Barthélemy +590</option>

        <option value="+290">St. Helena +290</option>

        <option value="+1">St. Kitts &amp; Nevis +1</option>

        <option value="+1">St. Lucia +1</option>

        <option value="+590">St. Martin +590</option>

        <option value="+508">St. Pierre &amp; Miquelon +508</option>

        <option value="+1">St. Vincent &amp; Grenadines +1</option>

        <option value="+249">Sudan +249</option>

        <option value="+597">Suriname +597</option>

        <option value="+47">Svalbard &amp; Jan Mayen +47</option>

        <option value="+268">Swaziland +268</option>

        <option value="+46">Sweden +46</option>

        <option value="+41">Switzerland +41</option>

        <option value="+963">Syria +963</option>

        <option value="+239">São Tomé &amp; Príncipe +239</option>

        <option value="+886">Taiwan +886</option>

        <option value="+992">Tajikistan +992</option>

        <option value="+255">Tanzania +255</option>

        <option value="+66">Thailand +66</option>

        <option value="+670">Timor-Leste +670</option>

        <option value="+228">Togo +228</option>

        <option value="+690">Tokelau +690</option>

        <option value="+676">Tonga +676</option>

        <option value="+1">Trinidad &amp; Tobago +1</option>

        <option value="+290">Tristan da Cunha +290</option>

        <option value="+216">Tunisia +216</option>

        <option value="+90">Turkey +90</option>

        <option value="+993">Turkmenistan +993</option>

        <option value="+1">Turks &amp; Caicos Islands +1</option>

        <option value="+688">Tuvalu +688</option>

        <option value="+1">U.S. Virgin Islands +1</option>

        <option value="+256">Uganda +256</option>

        <option value="+380">Ukraine +380</option>

        <option value="+971">United Arab Emirates +971</option>

        <option value="+44">United Kingdom +44</option>

        <option value="+1">United States +1</option>

        <option value="+598">Uruguay +598</option>

        <option value="+998">Uzbekistan +998</option>

        <option value="+678">Vanuatu +678</option>

        <option value="+39">Vatican City +39</option>

        <option value="+58">Venezuela +58</option>

        <option value="+84">Vietnam +84</option>

        <option value="+681">Wallis &amp; Futuna +681</option>

        <option value="+212">Western Sahara +212</option>

        <option value="+800">World +800</option>

        <option value="+808">World +808</option>

        <option value="+870">World +870</option>

        <option value="+878">World +878</option>

        <option value="+881">World +881</option>

        <option value="+882">World +882</option>

        <option value="+883">World +883</option>

        <option value="+888">World +888</option>

        <option value="+979">World +979</option>

        <option value="+967">Yemen +967</option>

        <option value="+260">Zambia +260</option>

        <option value="+263">Zimbabwe +263</option>

        <option value="+358">Åland Islands +358</option>

      </>
    );
  }


  renderCountry() {
    return (
      <>
        <option value="AF" data-code="93">Afghanistan</option>

        <option value="AX" data-code="358">Åland Islands</option>

        <option value="AL" data-code="355">Albania</option>

        <option value="DZ" data-code="213">Algeria</option>

        <option value="AS" data-code="1">American Samoa</option>

        <option value="AD" data-code="376">Andorra</option>

        <option value="AO" data-code="244">Angola</option>

        <option value="AI" data-code="1">Anguilla</option>

        <option value="AQ" data-code="0">Antarctica</option>

        <option value="AG" data-code="1">Antigua and Barbuda</option>

        <option value="AR" data-code="54">Argentina</option>

        <option value="AM" data-code="374">Armenia</option>

        <option value="AW" data-code="297">Aruba</option>

        <option value="AU" data-code="61">Australia</option>

        <option value="AT" data-code="43">Austria</option>

        <option value="AZ" data-code="994">Azerbaijan</option>

        <option value="BS" data-code="1">Bahamas</option>

        <option value="BH" data-code="973">Bahrain</option>

        <option value="BD" data-code="880">Bangladesh</option>

        <option value="BB" data-code="1">Barbados</option>

        <option value="BY" data-code="375">Belarus</option>

        <option value="BE" data-code="32">Belgium</option>

        <option value="BZ" data-code="501">Belize</option>

        <option value="BJ" data-code="229">Benin</option>

        <option value="BM" data-code="1">Bermuda</option>

        <option value="BT" data-code="975">Bhutan</option>

        <option value="BO" data-code="591">Bolivia</option>

        <option value="BQ" data-code="599">Bonaire, Sint Eustatius and Saba</option>

        <option value="BA" data-code="387">Bosnia and Herzegovina</option>

        <option value="BW" data-code="267">Botswana</option>

        <option value="BV" data-code="0">Bouvet Island</option>

        <option value="BR" data-code="55">Brazil</option>

        <option value="IO" data-code="246">British Indian Ocean Territory</option>

        <option value="BN" data-code="673">Brunei</option>

        <option value="BG" data-code="359">Bulgaria</option>

        <option value="BF" data-code="226">Burkina Faso</option>

        <option value="BI" data-code="257">Burundi</option>

        <option value="CV" data-code="238">Cabo Verde</option>

        <option value="KH" data-code="855">Cambodia</option>

        <option value="CM" data-code="237">Cameroon</option>

        <option value="CA" data-code="1">Canada</option>

        <option value="KY" data-code="1">Cayman Islands</option>

        <option value="CF" data-code="236">Central African Republic</option>

        <option value="TD" data-code="235">Chad</option>

        <option value="CL" data-code="56">Chile</option>

        <option value="CN" data-code="86">China</option>

        <option value="CX" data-code="61">Christmas Island</option>

        <option value="CC" data-code="61">Cocos (Keeling) Islands</option>

        <option value="CO" data-code="57">Colombia</option>

        <option value="KM" data-code="269">Comoros</option>

        <option value="CG" data-code="242">Congo</option>

        <option value="CD" data-code="243">Congo (the Democratic Republic of the)</option>

        <option value="CK" data-code="682">Cook Islands</option>

        <option value="CR" data-code="506">Costa Rica</option>

        <option value="CI" data-code="225">Côte d'Ivoire</option>

        <option value="HR" data-code="385">Croatia</option>

        <option value="CU" data-code="53">Cuba</option>

        <option value="CW" data-code="599">Curaçao</option>

        <option value="CY" data-code="357">Cyprus</option>

        <option value="CZ" data-code="420">Czechia</option>

        <option value="DK" data-code="45">Denmark</option>

        <option value="DJ" data-code="253">Djibouti</option>

        <option value="DM" data-code="1">Dominica</option>

        <option value="DO" data-code="1">Dominican Republic</option>

        <option value="EC" data-code="593">Ecuador</option>

        <option value="EG" data-code="20">Egypt</option>

        <option value="SV" data-code="503">El Salvador</option>

        <option value="GQ" data-code="240">Equatorial Guinea</option>

        <option value="ER" data-code="291">Eritrea</option>

        <option value="EE" data-code="372">Estonia</option>

        <option value="ET" data-code="251">Ethiopia</option>

        <option value="FK" data-code="500">Falkland Islands [Malvinas]</option>

        <option value="FO" data-code="298">Faroe Islands</option>

        <option value="FJ" data-code="679">Fiji</option>

        <option value="FI" data-code="358">Finland</option>

        <option value="FR" data-code="33">France</option>

        <option value="GF" data-code="594">French Guiana</option>

        <option value="PF" data-code="689">French Polynesia</option>

        <option value="TF" data-code="0">French Southern Territories</option>

        <option value="GA" data-code="241">Gabon</option>

        <option value="GM" data-code="220">Gambia</option>

        <option value="GE" data-code="995">Georgia</option>

        <option value="DE" data-code="49">Germany</option>

        <option value="GH" data-code="233">Ghana</option>

        <option value="GI" data-code="350">Gibraltar</option>

        <option value="GR" data-code="30">Greece</option>

        <option value="GL" data-code="299">Greenland</option>

        <option value="GD" data-code="1">Grenada</option>

        <option value="GP" data-code="590">Guadeloupe</option>

        <option value="GU" data-code="1">Guam</option>

        <option value="GT" data-code="502">Guatemala</option>

        <option value="GG" data-code="44">Guernsey</option>

        <option value="GN" data-code="224">Guinea</option>

        <option value="GW" data-code="245">Guinea-Bissau</option>

        <option value="GY" data-code="592">Guyana</option>

        <option value="HT" data-code="509">Haiti</option>

        <option value="HM" data-code="0">Heard Island and McDonald Islands</option>

        <option value="VA" data-code="39">Holy See</option>

        <option value="HN" data-code="504">Honduras</option>

        <option value="HK" data-code="852">Hong Kong</option>

        <option value="HU" data-code="36">Hungary</option>

        <option value="IS" data-code="354">Iceland</option>

        <option value="IN" data-code="91">India</option>

        <option value="ID" data-code="62">Indonesia</option>

        <option value="IR" data-code="98">Iran</option>

        <option value="IQ" data-code="964">Iraq</option>

        <option value="IE" data-code="353">Ireland</option>

        <option value="IM" data-code="44">Isle of Man</option>

        <option value="IL" data-code="972">Israel</option>

        <option value="IT" data-code="39">Italy</option>

        <option value="JM" data-code="1">Jamaica</option>

        <option value="JP" data-code="81">Japan</option>

        <option value="JE" data-code="44">Jersey</option>

        <option value="JO" data-code="962">Jordan</option>

        <option value="KZ" data-code="7">Kazakhstan</option>

        <option value="KE" data-code="254">Kenya</option>

        <option value="KI" data-code="686">Kiribati</option>

        <option value="KW" data-code="965">Kuwait</option>

        <option value="KG" data-code="996">Kyrgyzstan</option>

        <option value="LA" data-code="856">Laos</option>

        <option value="LV" data-code="371">Latvia</option>

        <option value="LB" data-code="961">Lebanon</option>

        <option value="LS" data-code="266">Lesotho</option>

        <option value="LR" data-code="231">Liberia</option>

        <option value="LY" data-code="218">Libya</option>

        <option value="LI" data-code="423">Liechtenstein</option>

        <option value="LT" data-code="370">Lithuania</option>

        <option value="LU" data-code="352">Luxembourg</option>

        <option value="MO" data-code="853">Macao</option>

        <option value="MK" data-code="389">Macedonia</option>

        <option value="MG" data-code="261">Madagascar</option>

        <option value="MW" data-code="265">Malawi</option>

        <option value="MY" data-code="60">Malaysia</option>

        <option value="MV" data-code="960">Maldives</option>

        <option value="ML" data-code="223">Mali</option>

        <option value="MT" data-code="356">Malta</option>

        <option value="MH" data-code="692">Marshall Islands</option>

        <option value="MQ" data-code="596">Martinique</option>

        <option value="MR" data-code="222">Mauritania</option>

        <option value="MU" data-code="230">Mauritius</option>

        <option value="YT" data-code="262">Mayotte</option>

        <option value="MX" data-code="52">Mexico</option>

        <option value="FM" data-code="691">Micronesia (Federated States of)</option>

        <option value="MD" data-code="373">Moldova</option>

        <option value="MC" data-code="377">Monaco</option>

        <option value="MN" data-code="976">Mongolia</option>

        <option value="ME" data-code="382">Montenegro</option>

        <option value="MS" data-code="1">Montserrat</option>

        <option value="MA" data-code="212">Morocco</option>

        <option value="MZ" data-code="258">Mozambique</option>

        <option value="MM" data-code="95">Myanmar</option>

        <option value="NA" data-code="264">Namibia</option>

        <option value="NR" data-code="674">Nauru</option>

        <option value="NP" data-code="977">Nepal</option>

        <option value="NL" data-code="31">Netherlands</option>

        <option value="NC" data-code="687">New Caledonia</option>

        <option value="NZ" data-code="64">New Zealand</option>

        <option value="NI" data-code="505">Nicaragua</option>

        <option value="NE" data-code="227">Niger</option>

        <option value="NG" data-code="234">Nigeria</option>

        <option value="NU" data-code="683">Niue</option>

        <option value="NF" data-code="672">Norfolk Island</option>

        <option value="KP" data-code="850">North Korea</option>

        <option value="MP" data-code="1">Northern Mariana Islands</option>

        <option value="NO" data-code="47">Norway</option>

        <option value="OM" data-code="968">Oman</option>

        <option value="PK" data-code="92">Pakistan</option>

        <option value="PW" data-code="680">Palau</option>

        <option value="PS" data-code="970">Palestine, State of</option>

        <option value="PA" data-code="507">Panama</option>

        <option value="PG" data-code="675">Papua New Guinea</option>

        <option value="PY" data-code="595">Paraguay</option>

        <option value="PE" data-code="51">Peru</option>

        <option value="PH" data-code="63">Philippines</option>

        <option value="PN" data-code="0">Pitcairn</option>

        <option value="PL" data-code="48">Poland</option>

        <option value="PT" data-code="351">Portugal</option>

        <option value="PR" data-code="1">Puerto Rico</option>

        <option value="QA" data-code="974">Qatar</option>

        <option value="RE" data-code="262">Réunion</option>

        <option value="RO" data-code="40">Romania</option>

        <option value="RU" data-code="7">Russia</option>

        <option value="RW" data-code="250">Rwanda</option>

        <option value="BL" data-code="590">Saint Barthélemy</option>

        <option value="SH" data-code="290">Saint Helena, Ascension and Tristan da Cunha</option>

        <option value="KN" data-code="1">Saint Kitts and Nevis</option>

        <option value="LC" data-code="1">Saint Lucia</option>

        <option value="MF" data-code="590">Saint Martin (French part)</option>

        <option value="PM" data-code="508">Saint Pierre and Miquelon</option>

        <option value="VC" data-code="1">Saint Vincent and the Grenadines</option>

        <option value="WS" data-code="685">Samoa</option>

        <option value="SM" data-code="378">San Marino</option>

        <option value="ST" data-code="239">Sao Tome and Principe</option>

        <option value="SA" data-code="966">Saudi Arabia</option>

        <option value="SN" data-code="221">Senegal</option>

        <option value="RS" data-code="381">Serbia</option>

        <option value="SC" data-code="248">Seychelles</option>

        <option value="SL" data-code="232">Sierra Leone</option>

        <option value="SG" data-code="65">Singapore</option>

        <option value="SX" data-code="1">Sint Maarten (Dutch part)</option>

        <option value="SK" data-code="421">Slovakia</option>

        <option value="SI" data-code="386">Slovenia</option>

        <option value="SB" data-code="677">Solomon Islands</option>

        <option value="SO" data-code="252">Somalia</option>

        <option value="ZA" data-code="27">South Africa</option>

        <option value="GS" data-code="0">South Georgia and the South Sandwich Islands</option>

        <option value="KR" data-code="82">South Korea</option>

        <option value="SS" data-code="211">South Sudan</option>

        <option value="ES" data-code="34">Spain</option>

        <option value="LK" data-code="94">Sri Lanka</option>

        <option value="SD" data-code="249">Sudan</option>

        <option value="SR" data-code="597">Suriname</option>

        <option value="SJ" data-code="47">Svalbard and Jan Mayen</option>

        <option value="SZ" data-code="268">Swaziland</option>

        <option value="SE" data-code="46">Sweden</option>

        <option value="CH" data-code="41">Switzerland</option>

        <option value="SY" data-code="963">Syria</option>

        <option value="TW" data-code="886">Taiwan</option>

        <option value="TJ" data-code="992">Tajikistan</option>

        <option value="TZ" data-code="255">Tanzania</option>

        <option value="TH" data-code="66">Thailand</option>

        <option value="TL" data-code="670">Timor-Leste</option>

        <option value="TG" data-code="228">Togo</option>

        <option value="TK" data-code="690">Tokelau</option>

        <option value="TO" data-code="676">Tonga</option>

        <option value="TT" data-code="1">Trinidad and Tobago</option>

        <option value="TN" data-code="216">Tunisia</option>

        <option value="TR" data-code="90">Turkey</option>

        <option value="TM" data-code="993">Turkmenistan</option>

        <option value="TC" data-code="1">Turks and Caicos Islands</option>

        <option value="TV" data-code="688">Tuvalu</option>

        <option value="UG" data-code="256">Uganda</option>

        <option value="UA" data-code="380">Ukraine</option>

        <option value="AE" data-code="971">United Arab Emirates</option>

        <option value="GB" data-code="44">United Kingdom</option>

        <option value="UM" data-code="0">United States Minor Outlying Islands</option>

        <option value="US" data-code="1">United States of America</option>

        <option value="UY" data-code="598">Uruguay</option>

        <option value="UZ" data-code="998">Uzbekistan</option>

        <option value="VU" data-code="678">Vanuatu</option>

        <option value="VE" data-code="58">Venezuela</option>

        <option value="VN" data-code="84">Vietnam</option>

        <option value="VG" data-code="1">Virgin Islands (British)</option>

        <option value="VI" data-code="1">Virgin Islands (U.S.)</option>

        <option value="WF" data-code="681">Wallis and Futuna</option>

        <option value="EH" data-code="212">Western Sahara</option>

        <option value="YE" data-code="967">Yemen</option>

        <option value="ZM" data-code="260">Zambia</option>

        <option value="ZW" data-code="263">Zimbabwe</option>
      </>
    );
  }


  render() {
    return (

      <>

        <div className="mt-3">
          <p>
            Please, fill-in the profile to unlock access to the marketplace.
            <br />
            All provided data except “Public information”, address,
            and company website we will not be visible to third parties.
          </p>
          <div>


            <Form className="mb-3">
              <h4>Company</h4>


              <Form.Group controlId="companyName">
                <Form.Label>
                  Company name
                  <span className="text-orange">*</span>
                </Form.Label>

                <Form.Control
                  type="input"
                  placeholder="Company name"
                  className="border border-orange"
                  required
                  value={this.state.companyName}
                  onChange={(e) => {
                    this.setState({
                      companyName: e.target.value,
                    },
                    () => {
                      store.dispatch(setFormData(
                        {
                          companyName: this.state.companyName,
                        },
                      ));
                    });
                  }}
                />
              </Form.Group>


              <Form.Group controlId="companyLicence">
                <Form.Label>
                  Company licence
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control type="file" className="bg-white border border-orange p-1" style={{ borderRadius: '5px' }} required />
              </Form.Group>

              <h4>Company address</h4>

              <Form.Group controlId="companyCountry">
                <Form.Label>
                  Country
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  className=" col-xs-12 col-sm-6 col-md-4 border border-orange "
                  required
                  value={this.state.companyCountry}
                  onChange={(e) => {
                    this.setState({
                      companyCountry: e.target.value,
                    },
                    () => {
                      store.dispatch(setFormData(
                        {
                          companyCountry: this.state.companyCountry,
                        },
                      ));
                    });
                  }}
                >
                  {this.renderCountry()}

                </Form.Control>

              </Form.Group>

              <Form.Group controlId="companyStateProvinceRegion">
                <Form.Label>State/province/region </Form.Label>
                <Form.Control
                  type="input"
                  placeholder="State/province/region"
                  value={this.state.companyStateProvinceRegion}
                  onChange={(e) => {
                    this.setState({ companyStateProvinceRegion: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyStateProvinceRegion: this.state.companyStateProvinceRegion,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyCity">
                <Form.Label>
                  City
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyCity}
                  onChange={(e) => {
                    this.setState({ companyCity: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyCity: this.state.companyCity,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyPostalCode">
                <Form.Label>
                  Postal/zip code
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyPostalCode}
                  onChange={(e) => {
                    this.setState({ companyPostalCode: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyPostalCode: this.state.companyPostalCode,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyStreet">
                <Form.Label>
                  Street address
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyStreet}
                  onChange={(e) => {
                    this.setState({ companyStreet: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyStreet: this.state.companyStreet,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyStreet2">
                <Form.Label>Street address line 2</Form.Label>
                <Form.Control
                  type="input"
                  className="border "
                  value={this.state.companyStreet2}
                  onChange={(e) => {
                    this.setState({ companyStreet2: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyStreet2: this.state.companyStreet2,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyAddressProof">
                <Form.Label>
                  Address proof
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control type="file" className="bg-white  border border-orange p-1" style={{ borderRadius: '5px' }} required />
                <Form.Text className="text-muted">
                  <small className="text-orange">Please attach any rent document (e.g. household utility bill)</small>
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="companyWebSite">
                <Form.Label>Company website</Form.Label>
                <Form.Control
                  type="input"
                  value={this.state.companyWebSite}
                  onChange={(e) => {
                    this.setState({ companyWebSite: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyWebSite: this.state.companyWebSite,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <h4>Company owner</h4>

              <Form.Group controlId="companyOwnerFirstName">
                <Form.Label>
                  First name
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyOwnerFirstName}
                  onChange={(e) => {
                    this.setState({ companyOwnerFirstName: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyOwnerFirstName: this.state.companyOwnerFirstName,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyOwnerLastName">
                <Form.Label>
                  Last name
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyOwnerLastName}
                  onChange={(e) => {
                    this.setState({ companyOwnerLastName: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyOwnerLastName: this.state.companyOwnerLastName,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>

              <Form.Group controlId="companyOwnerIdCopy">
                <Form.Label>
                  ID copy
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="file"
                  className="bg-white border border-orange p-1"
                  style={{ borderRadius: '5px' }}
                  required
                />
              </Form.Group>


              <p>
                Phone
                <span className="text-orange">*</span>
              </p>

              <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyOwnerPhone">
                <InputGroup className="border border-orange " style={{ borderRadius: '5px' }}>
                  <InputGroup.Prepend>
                    <Form.Control
                      as="select"
                      className=" border-0"
                      defaultValue={this.state.companyOwnerPhone.code}
                      required
                      onChange={(e) => {
                        this.setState({
                          companyOwnerPhone: {
                            code: e.target.value,
                            phone: e.target.closest('div').nextSibling.value,
                          },
                        },
                        () => {
                          store.dispatch(setFormData(
                            {
                              companyOwnerPhone: this.state.companyOwnerPhone,
                            },
                          ));
                        });
                      }}
                    >

                      {this.renderCountryCode()}


                    </Form.Control>
                  </InputGroup.Prepend>
                  <Form.Control
                    className=""
                    required
                    value={this.state.companyOwnerPhone.phone}
                    onChange={(e) => {
                      this.setState({
                        companyOwnerPhone: {
                          code: e.target.previousSibling.querySelector('select').value,
                          phone: e.target.value,
                        },
                      },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyOwnerPhone: this.state.companyOwnerPhone,
                          },
                        ));
                      });
                    }}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="companyOwnerEmail">
                <Form.Label>
                  Email
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyOwnerEmail}
                  onChange={(e) => {
                    this.setState({ companyOwnerEmail: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyOwnerEmail: this.state.companyOwnerEmail,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>


              <h4>Public information</h4>


              <Form.Group controlId="companyTradeName">
                <Form.Label>
                  Trade name
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyTradeName}
                  onChange={(e) => {
                    this.setState({ companyTradeName: e.target.value },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyTradeName: this.state.companyTradeName,
                          },
                        ));
                      });
                  }}
                />
              </Form.Group>


              <Form.Group controlId="companyLogo">
                <Form.Label>Logo </Form.Label>
                <Form.Control type="file" className="bg-white border  p-1" style={{ borderRadius: '5px' }} />
              </Form.Group>


              <p>
                Contact phone
                <span className="text-orange">*</span>
              </p>
              <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyPhone">
                <InputGroup className="border border-orange " style={{ borderRadius: '5px' }}>
                  <InputGroup.Prepend>
                    <Form.Control
                      as="select"
                      className=" border-0"
                      defaultValue={this.state.companyPhone.phone}
                      required
                      onChange={(e) => {
                        this.setState({
                          companyPhone: {
                            code: e.target.value,
                            phone: e.target.closest('div').nextSibling.value,
                          },
                        },
                        () => {
                          store.dispatch(setFormData(
                            {
                              companyPhone: this.state.companyPhone,
                            },
                          ));
                        });
                      }}
                    >

                      {this.renderCountryCode()}


                    </Form.Control>
                  </InputGroup.Prepend>
                  <Form.Control
                    className=""
                    required
                    value={this.state.companyPhone.phone}
                    onChange={(e) => {
                      this.setState({
                        companyPhone: {
                          code: e.target.previousSibling.querySelector('select').value,
                          phone: e.target.value,
                        },
                      },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyPhone: this.state.companyPhone,
                          },
                        ));
                      });
                    }}
                  />
                </InputGroup>
              </Form.Group>


              <p>Additional contact phone</p>
              <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyPhoneAdditional">
                <InputGroup className="border  " style={{ borderRadius: '5px' }}>
                  <InputGroup.Prepend>
                    <Form.Control
                      as="select"
                      className=" border-0"
                      defaultValue={this.state.companyPhoneAdditional.phone}
                      required
                      onChange={(e) => {
                        this.setState({
                          companyPhoneAdditional: {
                            code: e.target.value,
                            phone: e.target.closest('div').nextSibling.value,
                          },
                        },
                        () => {
                          store.dispatch(setFormData(
                            {
                              companyPhoneAdditional: this.state.companyPhoneAdditional,
                            },
                          ));
                        });
                      }}
                    >

                      {this.renderCountryCode()}

                    </Form.Control>
                  </InputGroup.Prepend>
                  <Form.Control
                    className=""
                    value={this.state.companyPhoneAdditional.phone}
                    onChange={(e) => {
                      this.setState({
                        companyPhoneAdditional: {
                          code: e.target.previousSibling.querySelector('select').value,
                          phone: e.target.value,
                        },
                      },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyPhoneAdditional: this.state.companyPhoneAdditional,
                          },
                        ));
                      });
                    }}
                  />
                </InputGroup>
              </Form.Group>


              <p>WhatsApp phone</p>
              <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyWhatsApp">
                <InputGroup className="border  " style={{ borderRadius: '5px' }}>
                  <InputGroup.Prepend>
                    <Form.Control
                      as="select"
                      className=" border-0"
                      defaultValue={this.state.companyWhatsApp.phone}
                      required
                      onChange={(e) => {
                        this.setState({
                          companyWhatsApp: {
                            code: e.target.value,
                            phone: e.target.closest('div').nextSibling.value,
                          },
                        },
                        () => {
                          store.dispatch(setFormData(
                            {
                              companyWhatsApp: this.state.companyWhatsApp,
                            },
                          ));
                        });
                      }}
                    >

                      {this.renderCountryCode()}

                    </Form.Control>
                  </InputGroup.Prepend>
                  <Form.Control
                    className=""
                    value={this.state.companyWhatsApp.phone}
                    onChange={(e) => {
                      this.setState({
                        companyWhatsApp: {
                          code: e.target.previousSibling.querySelector('select').value,
                          phone: e.target.value,
                        },
                      },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyWhatsApp: this.state.companyWhatsApp,
                          },
                        ));
                      });
                    }}
                  />
                </InputGroup>
              </Form.Group>


              <Form.Group controlId="companyTelegramId">
                <Form.Label>Telegram ID</Form.Label>
                <Form.Control
                  type="input"
                  value={this.state.companyTelegramId}
                  onChange={(e) => {
                    this.setState({
                      companyTelegramId: e.target.value,
                    },
                    () => {
                      store.dispatch(setFormData(
                        {
                          companyTelegramId: this.state.companyTelegramId,
                        },
                      ));
                    });
                  }}
                />
              </Form.Group>


              <p>Viber phone</p>
              <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyViber">
                <InputGroup className="border  " style={{ borderRadius: '5px' }}>
                  <InputGroup.Prepend>
                    <Form.Control
                      as="select"
                      className=" border-0"
                      defaultValue={this.state.companyViber.phone}
                      required
                      onChange={(e) => {
                        this.setState({
                          companyViber: {
                            code: e.target.value,
                            phone: e.target.closest('div').nextSibling.value,
                          },
                        },
                        () => {
                          store.dispatch(setFormData(
                            {
                              companyViber: this.state.companyViber,
                            },
                          ));
                        });
                      }}
                    >

                      {this.renderCountryCode()}


                    </Form.Control>
                  </InputGroup.Prepend>
                  <Form.Control
                    className=""
                    value={this.state.companyViber.phone}
                    onChange={(e) => {
                      this.setState({
                        companyViber: {
                          code: e.target.previousSibling.querySelector('select').value,
                          phone: e.target.value,
                        },
                      },
                      () => {
                        store.dispatch(setFormData(
                          {
                            companyViber: this.state.companyViber,
                          },
                        ));
                      });
                    }}
                  />
                </InputGroup>
              </Form.Group>


              <Form.Group controlId="companyWeChatId">
                <Form.Label>WeChat ID</Form.Label>
                <Form.Control
                  type="input"
                  value={this.state.companyWeChatId}
                  onChange={(e) => {
                    this.setState({
                      companyWeChatId: e.target.value,
                    },
                    () => {
                      store.dispatch(setFormData(
                        {
                          companyWeChatId: this.state.companyWeChatId,
                        },
                      ));
                    });
                  }}
                />
              </Form.Group>


              <Form.Group controlId="companyEmail">
                <Form.Label>
                  Email
                  <span className="text-orange">*</span>
                </Form.Label>
                <Form.Control
                  type="input"
                  className="border border-orange"
                  required
                  value={this.state.companyEmail}
                  onChange={(e) => {
                    this.setState({
                      companyEmail: e.target.value,
                    },
                    () => {
                      store.dispatch(setFormData(
                        {
                          companyEmail: this.state.companyEmail,
                        },
                      ));
                    });
                  }}
                />
              </Form.Group>


              {/* className={""} */}

              <p>
                Sunday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="sundayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                          <Form.Control
                            as="select"
                            className=" border border-orange"
                            disabled
                            defaultValue={this.state.sunday.from}
                            required
                            onChange={(e) => {
                              this.setState({
                                sunday: {
                                  from: e.target.value,
                                  to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                                },
                              },
                              () => {
                                store.dispatch(setFormData(
                                  {
                                    sunday: this.state.sunday,
                                  },
                                ));
                              });
                            }}
                          >

                            {this.renderWorkHours()}

                          </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                        ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                            as="select"
                            className=" border border-orange"
                            defaultValue={this.state.sunday.to}
                            required
                            disabled
                            onChange={(e) => {
                              this.setState({
                                sunday: {
                                  from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                  to: e.target.value,
                                },
                              },
                              () => {
                                store.dispatch(setFormData(
                                  {
                                    sunday: this.state.sunday,
                                  },
                                ));
                              });
                            }}
                        >
                          {this.renderWorkHours()}
                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="sundayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            sunday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                sunday: this.state.sunday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            sunday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                sunday: this.state.sunday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="sundayHoursSwitch">Day off</label>
                </div>

              </Form.Group>


              <p>
                Monday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="mondayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                          <Form.Control
                            as="select"
                            className=" border border-orange"
                            disabled
                            defaultValue={this.state.monday.from}
                            required
                            onChange={(e) => {
                              this.setState({
                                monday: {
                                  from: e.target.value,
                                  to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                                },
                              },
                              () => {
                                store.dispatch(setFormData(
                                  {
                                    monday: this.state.monday,
                                  },
                                ));
                              });
                            }}
                          >

                            {this.renderWorkHours()}

                          </Form.Control>
                        </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                        </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                            as="select"
                            className=" border border-orange"
                            defaultValue={this.state.monday.to}
                            required
                            disabled
                            onChange={(e) => {
                              this.setState({
                                monday: {
                                  from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                  to: e.target.value,
                                },
                              },
                              () => {
                                store.dispatch(setFormData(
                                  {
                                    monday: this.state.monday,
                                  },
                                ));
                              });
                            }}
                        >
                          {this.renderWorkHours()}
                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="mondayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            monday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                monday: this.state.monday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            monday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                monday: this.state.monday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="mondayHoursSwitch">Day off</label>
                </div>

              </Form.Group>


              <p>
                Tuesday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="tuesdayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          disabled
                          defaultValue={this.state.tuesday.from}
                          required
                          onChange={(e) => {
                            this.setState({
                              tuesday: {
                                from: e.target.value,
                                to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  tuesday: this.state.tuesday,
                                },
                              ));
                            });
                          }}
                        >


                          {this.renderWorkHours()}

                        </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          defaultValue={this.state.monday.to}
                          required
                          disabled
                          onChange={(e) => {
                            this.setState({
                              tuesday: {
                                from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                to: e.target.value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  tuesday: this.state.tuesday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}


                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="tuesdayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            tuesday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                tuesday: this.state.tuesday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            tuesday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                tuesday: this.state.tuesday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="tuesdayHoursSwitch">Day off</label>
                </div>

              </Form.Group>

              <p>
                Wednesday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="wednesdayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          disabled
                          defaultValue={this.state.wednesday.from}
                          required
                          onChange={(e) => {
                            this.setState({
                              wednesday: {
                                from: e.target.value,
                                to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  wednesday: this.state.wednesday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}

                        </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          defaultValue={this.state.wednesday.to}
                          required
                          disabled
                          onChange={(e) => {
                            this.setState({
                              wednesday: {
                                from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                to: e.target.value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  wednesday: this.state.wednesday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}


                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="wednesdayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            wednesday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                wednesday: this.state.wednesday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            wednesday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                wednesday: this.state.wednesday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="wednesdayHoursSwitch">Day off</label>
                </div>

              </Form.Group>

              <p>
                Thursday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="thursdayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          disabled
                          defaultValue={this.state.thursday.from}
                          required
                          onChange={(e) => {
                            this.setState({
                              thursday: {
                                from: e.target.value,
                                to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  thursday: this.state.thursday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}

                        </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          defaultValue={this.state.thursday.to}
                          required
                          disabled
                          onChange={(e) => {
                            this.setState({
                              thursday: {
                                from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                to: e.target.value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  thursday: this.state.thursday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}


                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="thursdayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            thursday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                thursday: this.state.thursday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            thursday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                thursday: this.state.thursday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="thursdayHoursSwitch">Day off</label>
                </div>

              </Form.Group>

              <p>
                Friday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="fridayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          disabled
                          defaultValue={this.state.friday.from}
                          required
                          onChange={(e) => {
                            this.setState({
                              friday: {
                                from: e.target.value,
                                to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  friday: this.state.friday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}

                        </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          defaultValue={this.state.friday.to}
                          required
                          disabled
                          onChange={(e) => {
                            this.setState({
                              friday: {
                                from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                to: e.target.value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  friday: this.state.friday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}


                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="fridayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            friday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                friday: this.state.friday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            friday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                friday: this.state.friday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="fridayHoursSwitch">Day off</label>
                </div>

              </Form.Group>

              <p>
                Saturday working hours
                <span className="text-orange">*</span>
              </p>

              <Form.Group controlId="saturdayHours">

                <div className="row p-0 m-0 mb-1">
                  <div className="col-6 p-0 m-0">
                    <div className="row p-0 m-0">
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          disabled
                          defaultValue={this.state.saturday.from}
                          required
                          onChange={(e) => {
                            this.setState({
                              saturday: {
                                from: e.target.value,
                                to: e.target.parentNode.parentNode.lastChild.querySelector('select').value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  saturday: this.state.saturday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}

                        </Form.Control>
                      </div>
                      <div className="p-0 m-0 m-auto">
                          ---
                      </div>
                      <div className="col-5 p-0 m-0">
                        <Form.Control
                          as="select"
                          className=" border border-orange"
                          defaultValue={this.state.saturday.to}
                          required
                          disabled
                          onChange={(e) => {
                            this.setState({
                              saturday: {
                                from: e.target.parentNode.parentNode.firstChild.querySelector('select').value,
                                to: e.target.value,
                              },
                            },
                            () => {
                              store.dispatch(setFormData(
                                {
                                  saturday: this.state.saturday,
                                },
                              ));
                            });
                          }}
                        >

                          {this.renderWorkHours()}


                        </Form.Control>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-switch mb-4">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="saturdayHoursSwitch"
                    defaultChecked
                    onChange={(e) => {
                      // console.log(e.target.checked);
                      const selects = e.target.parentNode.previousSibling.querySelectorAll('select');
                      selects.forEach((elem) => {
                        elem.disabled = !elem.disabled;
                        // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                        if (!e.target.checked) {
                          this.setState({
                            saturday: {
                              from: e.target.parentNode.parentNode.querySelectorAll('select')[0].value,
                              to: e.target.parentNode.parentNode.querySelectorAll('select')[1].value,
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                saturday: this.state.saturday,
                              },
                            ));
                          });
                        } else {
                          this.setState({
                            saturday: {
                              from: 'day off',
                              to: 'day off',
                            },
                          },
                          () => {
                            store.dispatch(setFormData(
                              {
                                saturday: this.state.saturday,
                              },
                            ));
                          });
                        }
                      });
                    }}
                  />
                  <label className="custom-control-label" htmlFor="saturdayHoursSwitch">Day off</label>
                </div>

              </Form.Group>


              <h4>Office photos </h4>

              <ImageUpload inputId="officePhotosSubmit" files={this.props.officePhotos} actionSet={(data) => setOfficePhotos(data)} />


              <Button
                variant="primary"
                onClick={() => {
                  // console.log(store.getState());
                  console.log(this.props.state);
                  console.dir(this.props.officePhotos);
                  const blob = new Blob(this.props.officePhotos.map((elem) => elem.file), { type: 'image/jpeg' });
                  console.log(blob);
                }}
              >
                  Submit
              </Button>

            </Form>


          </div>


        </div>

      </>


    );
  }
}


const mapStateToProp = (state) => ({
  state: state.Profile.formData,
  officePhotos: state.Profile.officePhotos,

  // companyName: state.Profile.formData.companyName,
  // companyCountry: state.Profile.formData.companyCountry,
  // companyStateProvinceRegion: state.Profile.formData.companyStateProvinceRegion,
  // companyCity: state.Profile.formData.companyCity,
  // companyPostalCode:state.Profile.formData.companyPostalCode,
  // companyStreet:state.Profile.formData.companyStreet,
  // companyStreet2:state.Profile.formData.companyStreet2,
  // companyWebSite:state.Profile.formData.companyWebSite,
  // companyOwnerFirstName:state.Profile.formData.companyOwnerFirstName,
  // companyOwnerLastName:state.Profile.formData.companyOwnerLastName,
  // companyOwnerPhone:state.Profile.formData.companyOwnerPhone,
  // companyOwnerEmail:state.Profile.formData.companyOwnerEmail,
  // companyTradeName:state.Profile.formData.companyTradeName,
  // companyPhone:state.Profile.formData.companyPhone,
  // companyPhoneAdditional:state.Profile.formData.companyPhoneAdditional,
  // companyWhatsApp:state.Profile.formData.companyWhatsApp,
  // companyTelegramId:state.Profile.formData.companyTelegramId,
  // companyViber:state.Profile.formData.companyViber,
  // companyWeChatId:state.Profile.formData.companyWeChatId,
  // companyEmail:state.Profile.formData.companyEmail,
  // sunday:state.Profile.formData.sunday,
  // monday:state.Profile.formData.monday,
  // tuesday:state.Profile.formData.tuesday,
  // wednesday:state.Profile.formData.wednesday,
  // thursday:state.Profile.formData.thursday,
  // friday:state.Profile.formData.friday,
  // saturday:state.Profile.formData.saturday,

});

export default connect(mapStateToProp)(Profile);


// export default Profile;
