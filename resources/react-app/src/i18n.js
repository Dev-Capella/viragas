import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            /*Anasayfa*/
            HomePageProduct: "Ürünlerimiz",
            HomePageWhoWeAre: "Biz Kimiz?",

            HomePageMission: "Misyon",
            HomePageMissionText:
                "Sektörde öncü konumunu sürdürerek, kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında ileri teknoloji ve zanaatkarlığın birleşimini sunmayı hedefler.",
            HomePageVision: "Vizyon",

            HomePageProductionFacility: "Üretim Tesisimiz",
            HomePageProductionFacilityText:
                "Modern teknolojiye sahip üretim tesisimizde, kaliteli ürünlerimizi titizlikle üretiyoruz. Yüksek standartlara ve müşteri memnuniyetine odaklanarak, sektörde öncü bir konumda yer alıyoruz.",
            HomePageQuality: "Kalite Anlayışımız",
            HomePageQualityText:
                "30 yılı aşkın deneyimiyle kaliteden ödün vermeyen bir yaklaşımla kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında öncüdür.",
            /*BreadsCrumbs */
            AboutUsBread: "Kurumsal",
            ProductsBread: "Ürünler",
            ContactBread: "İletişim",
            ReferanceBread: "Referanslar",
            ActivitiesBread: "Faaliyetler",
            /*Hakkımızda*/
            AboutUsViraGas: "VIRA GAS SPRINGS",
            AboutUsViraGasTwo: "VIRA GAZLI YAY",
            AboutUsFirstTitle: "FİRMA PROFİLİ",
            AboutUsContentOne:
                "sac şekillendirme sektöründe faaliyet gösteren ve 2002 yılında kalıp gazlı yayları üretmek amacıyla kurulmuş bir firmadır.",
            AboutUsContentTwo1: "Kalıp Gazlı Yayları Türkiye’de ilk kez",
            AboutUsContentTwo2:
                "tarafından üretilmiştir. Türkiye’de ilk olmanın verdiği gurur ve heyecanla üretimine ürün çeşitlerini artırarak devam etmektedir.",
            AboutUsContentThree:
                "2005 yılında 97/23/EC Avrupa Birliği ‘’ Basınçlı Kaplar Direktifi‘’ne uygun olarak CE belgesi almış ve ürün yeterliliğini Avrupa normlarında kanıtlamıştır.",
            AboutUsContentFour:
                "2006 yılında ilk ihracatını Almanya’ya yaparak yurt dışı pazarlarda da kalitesinin geçerliliğini fiilen göstermiştir.",
            AboutUsSecondTitle: "VİRA GAS Teknoloji",
            AboutUsSecondContentOne:
                "Analiz çalışmalarından itibaren, hammadde şartları ve ısıl işlem süreçleri, laboratuvar ortamında kontrol edilmekte ve en son yazılımlarla takip edilmektedir.",
            AboutUsSecondContentTwo:
                "Müşterilerimizin yüksek hassasiyetleri, hizmet standartlarını ve özel isteklerini karşılamak için gelişmiş üretim araçları ve uygulamaları kullanılmaktadır.",
            AboutUsSecondContentThree:
                "mühendisleri, gelişmiş güvenlik ve güvenilirlik standartlarına göre, 2D/3D teknik çizimleri geliştirme tasarımları yapmaktadır.",
            AboutUsSecondContentFour:
                "Mil yüzeyine uygulanan özel işlemlerle normal standartların üzerine çıkılmakta ve en zorlu şartlarda bile kusursuz çalışan gazlı yaylara yeni sınırlar belirlenmektedir.",

            /*İletişim */
            Contact: "İletişim",
            ContactWithUs: "Bizimle iletişime geçin",
            ContactName: "Ad soyad",
            ContactMail: "Mail",
            ContactNumber: "Telefon",
            ContactSubject: "Konu",
            ContactMessage: "Mesajınız",
            ContactPrivate:
                "Gizliliğinizi korumayı taahhüt ediyoruz. Açık izniniz olmadan asla hakkınızda bilgi toplamayacağız.",
            ContactSendbutton: "Gönder",
            ContactSocialMedia: "Bize sosyal medyadan ulaşın",
            /*Ürünler*/
            ProductAll: "TÜMÜ",
            ProductFilter1: "MASA AYAĞI",
            ProductFilter2: "SANDALYE AYAĞI",

            /*HABERLER */
            News: "Haberler",
            ReadContinue: "Devamını Oku",
            /*Header*/
            HeaderHome: "Anasayfa",
            HeaderAboutUs: "Kurumsal",
            HeaderProduct: "Ürünler",
            HeaderOurDealers: "Bayilerimiz",
            HeaderCatalog: "Katalog",
            HeaderContact: "İletişim",
            HeaderReferance: "Referanslar",
            HeaderActivities: "Faaliyetler",
            /*Footer*/
            FooterInfo:
                "VIRA GAS SPRINGS sac şekillendirme sektöründe faaliyet gösteren ve 2002 yılında kalıp gazlı yayları üretmek amacıyla kurulmuş bir firmadır",
            FooterHome: "Anasayfa",
            FooterNews: "Haberler",
            FooterInstitutional: "Kurumsal",
            FooterActivities: "Faaliyetler",
            FooterReference: "Referanslar",
            FooterContact: "İletişim",
            FooterProduct: "Ürünler",
            FooterCatalog: "Katalog",
            FooterOurDealers: "Bayilerimiz",
            FooterDocuments: "Belgelerimiz",
            FooterAdress: "Adres",
            /*OUR DEALERS*/
            Almanya: "Almanya",
            Belcika: "Belçika",
            Slovenya: "Slovenya",
            Fransa: "Fransa",
            Italya: "İtalya",
            Portekiz: "Portekiz",
            CekCumhuriyeti: "Çek Cumhuriyeti",
            Avusturya: "Avusturya",
            Danimarka: "Danimarka",
            Slovakya: "Slovakya",
            Macaristan: "Macaristan",
            Norvec: "Norveç",
            BirlesikKrallık: "Birleşik Krallık",
            Romanya: "Romanya",

            Arjantin: "Arjantin",
            Çin: "Çin",
            Hindistan: "Hindistan",
            Japonya: "Japonya",
            Singapur: "Singapur",
            Türkiye: "Türkiye",
            Tayvan: "Tayvan",
            Brezilya: "Brezilya",
            Amerika: "Amerika",
            İran: "İran",
            Meksika: "Meksika",
            GüneyAfrika: "Güney Afrika",
            Kore: "Kore",
        },
    },
    en: {
        translation: {
            /*Anasayfa*/
            HomePageProduct: "Our Products",
            HomePageWhoWeAre: "Who We Are?",

            HomePageMission: "Mission",
            HomePageMissionText:
                "Maintaining its leading position in the industry, it aims to offer a combination of advanced technology and craftsmanship in the fields of welded manufacturing, surface treatment and metal coating.",
            HomePageVision: "Vission",

            HomePageProductionFacility: "Production Facility",
            HomePageProductionFacilityText:
                "In our production facility with modern technology, we produce our quality products meticulously. By focusing on high standards and customer satisfaction, we are a pioneer in the sector.",
            HomePageQuality: "Quality",
            HomePageQualityText:
                "With more than 30 years of experience, it is a pioneer in the fields of welded manufacturing, surface treatment and metal coating with an approach that does not compromise on quality.",

            /*BreadsCrumbs */
            AboutUsBread: "Institutional",
            ProductsBread: "Products",
            ContactBread: "Contact",
            ReferanceBread: "References",
            ActivitiesBread: "Activities",
            /*Hakkımızda*/
            AboutUsViraGas: " VIRA GAS SPRINGS ",
            AboutUsViraGasTwo: "VIRA GAS SPRINGS",
            AboutUsFirstTitle: "COMPANY PROFİLE",
            AboutUsContentOne:
                "is a company operating in the sheet metal forming sector and was established in 2002 to produce mold gas springs.",
            AboutUsContentTwo1:
                "Molded Gas Springs for the first time in Turkey",
            AboutUsContentTwo2:
                "produced by the company. It continues its production by increasing its product range with the pride and excitement of being the first in Turkey.",
            AboutUsContentThree:
                "In 2005, 97/23/EC European Union '' It has obtained CE certificate in accordance with the Pressure Vessels Directive and proved its product competence in European norms.",
            AboutUsContentFour:
                "In 2006, it made its first export to Germany and demonstrated the validity of its quality in foreign markets.",
            AboutUsSecondTitle: "VIRA GAS Technology",
            AboutUsSecondContentOne:
                "Starting from the analysis studies, raw material conditions and heat treatment processes are controlled in the laboratory environment and monitored with the latest software.",
            AboutUsSecondContentTwo:
                "Advanced production tools and practices are used to meet the high precision, service standards and special requests of our customers.",
            AboutUsSecondContentThree:
                "engineers design and develop 2D/3D technical drawings according to advanced safety and reliability standards.",
            AboutUsSecondContentFour:
                "Special treatments applied to the shaft surface exceed normal standards and set new limits for gas springs that work flawlessly even under the harshest conditions.",

            /*İletişim */
            Contact: "Contact",
            ContactWithUs: "Contact with us",
            ContactName: "Name surname",
            ContactMail: "Mail",
            ContactNumber: "Phone number",
            ContactSubject: "Subject",
            ContactMessage: "Message",
            ContactPrivate:
                "We are committed to protecting your privacy. We will never collect information about you without your explicit consent.",
            ContactSendbutton: "Send",
            ContactSocialMedia: "Contact us on social media",
            /*Ürünler*/
            ProductAll: "ALL",
            ProductFilter1: "TABLE LEG",
            ProductFilter2: "CHAİR LEG",
            /*HABERLER */
            News: "News",
            ReadContinue: "Read More",
            /*Header*/
            HeaderHome: "Home",
            FooterNews: "News",
            HeaderAboutUs: "Institutional",
            HeaderProduct: "Products",
            HeaderOurDealers: "Our Dealers",
            HeaderCatalog: "Catalog",
            HeaderContact: "Contact",
            HeaderReferance: "References",
            HeaderActivities: "Activities",
            /*Footer*/
            FooterInfo:
                "VIRA GAS SPRINGS is a company operating in the sheet metal forming sector and was established in 2002 to produce molded gas springs.",
            FooterHome: "Home",
            FooterInstitutional: "Institutional",
            FooterActivities: "Activities",
            FooterReference: "References",
            FooterContact: "Contact",
            FooterProduct: "Products",
            FooterCatalog: "Catalog",
            FooterOurDealers: "Dealers",
            FooterDocuments: "Certificates",
            FooterAdress: "Address",
            /* OUR DEALERS*/
            Almanya: "Germany",
            Belcika: "Belgium",
            Slovenya: "Slovenia",
            Fransa: "France",
            İtalya: "Italy",
            Portekiz: "Portugal",
            CekCumhuriyeti: "Czech Republic",
            Avusturya: "Austria",
            Danimarka: "Denmark",
            Slovakya: "Slovakia",
            Macaristan: "Hungary",
            Norvec: "Norway",
            BirlesikKrallık: "United Kingdom",
            Romanya: "Romania",

            Arjantin: "Argentina",
            Çin: "China",
            Hindistan: "India",
            Japonya: "Japan",
            Singapur: "Singapore",
            Türkiye: "Turkey",
            Tayvan: "Taiwan",
            Brezilya: "Brazil",
            Amerika: "United States",
            İran: "Iran",
            Meksika: "Mexico",
            GüneyAfrika: "South Africa",
            Kore: "South Korea",
        },
    },
};

i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
    fallbackLng: "tr",
    resources,
});

export default i18n;
