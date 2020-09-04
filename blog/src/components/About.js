import React from 'react';
import {NavLink ,withRouter}  from 'react-router-dom';
import './About.css';



const About = (props) => {
	// console.log(props);
	
	return (
		<div>
			<div className="container">
				<h4 className="center">HAKKIMIZDA</h4>
						<p>EN UYGUN fiyat politikasını oluşturan ilk firmadır. 2012 senesinde kurulan firmamızın amacı, modayı yakından takip eden ürünleri, alım gücünüzü zorlamadan sizlere sunmaktır. Firmamız bu ilkeden dolayı, fiyatları her zaman "EN UYGUN FİYAT" politikasından yola çıkarak sizlere sunmaya çalışacaktır. 

		TAKI VE BUTAKIBENİM ekibini oluşturan en önemli özellikler; mücadeleci tavırları, girişimci ruhları ve sorumlulukları paylaşma duygularıdır.  Bunun yanı sıra, günlük işlerimizde karşılaştığımız meydan okumaların ve zorlukların üzerinden rahatlıkla gelme özelliğine sahibiz. Firma yapımız gereği hiyerarşik engeller minimum düzeye indirgenmiş olup,  tüm mevkiler arasında doğrudan ve saygılı bir davranış biçimi geliştirmeyi teşvik etmekteyiz. 

		Bu yetenekli ekip, başarılı olmak ve aynı zamanda yenilikçi, yaratıcı ve eğlenceli bir imge elde etmek üzere, bulundukları profesyonel alanlarda daha iyiye ulaşmak için sürekli kendilerini geliştiren bir takım ruhuna sahiptir ki bu da ekip için vazgeçilmez bir koşuldur.</p>

				
				<li><NavLink to="/deniz" className="den">Form</NavLink></li>
				
			</div>
		</div>
	)
}


export default About;
