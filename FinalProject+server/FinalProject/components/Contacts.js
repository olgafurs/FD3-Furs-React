import React from 'react';
//import PropTypes from 'prop-types';

import './Contacts.css';

class Contacts extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="Contacts">
					<p className="ContactsTitle">Адрес:</p> <p className="ContactsData">г.Минск, ул.Бумажкова, д.37а, кв.56</p>
					<p className="ContactsTitle">Телефон:</p> <p className="ContactsData">+375(29)331-08-11 </p><p className="ContactsData">+375(29)551-08-11 </p>
					<p className="ContactsTitle">email:</p><p className="ContactsData">apcs.developer@gmail.com</p>
          <p>
					<a href="http://facebook.com" className="Facebook"><img className="SocialIcon" src="../images/facebook.png"></img></a>
					<a href="https://linkedin.com/" className="Linkedin"><img className="SocialIcon" src="../images/linkedin.png"></img></a>
					<a href="viber://chat?number=+375293310811" className="Viber"><img className="SocialIcon" src="../images/viber.png"></img></a>
					<a href="skype:fsg.man?chat" className="Skype"><img className="SocialIcon" src="../images/skype.png"></img></a>
          </p>
          <iframe className="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.513256014975!2d27.617165315709055!3d53.904854840430644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbce505c5a8c6d%3A0x195ee3d63198d6e4!2z0YPQuy4g0JHRg9C80LDQttC60L7QstCwIDM30LAsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1565174312336!5m2!1sru!2sby"
							></iframe>
				</div>

        
    )
    ;

  }

}

export default Contacts;
