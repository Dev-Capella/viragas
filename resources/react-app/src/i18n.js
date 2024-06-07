import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            /*Anasayfa*/
            HomePageProduct: "Ürünlerimiz",
            HomePageWhoWeAre: "Biz Kimiz?",
            HomePageWhoWeAreText:
                "Niksa Metal, Bursa merkezli operasyonu ve 30 yılı aşkın tecrübesiyle; kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında projelerini ilerletmektedir.",
            HomePageMission: "Misyon",
            HomePageMissionText:
                "Sektörde öncü konumunu sürdürerek, kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında ileri teknoloji ve zanaatkarlığın birleşimini sunmayı hedefler.",
            HomePageVision: "Vizyon",
            HomePageVisionText:
                "Müşteri memnuniyetini odak noktası olarak belirleyen Niksa Metal, beklentileri karşılamak için titizlikle çalışır.",
            HomePageProductionFacility: "Üretim Tesisimiz",
            HomePageProductionFacilityText:
                "Modern teknolojiye sahip üretim tesisimizde, kaliteli ürünlerimizi titizlikle üretiyoruz. Yüksek standartlara ve müşteri memnuniyetine odaklanarak, sektörde öncü bir konumda yer alıyoruz.",
            HomePageQuality: "Kalite Anlayışımız",
            HomePageQualityText:
                "30 yılı aşkın deneyimiyle kaliteden ödün vermeyen bir yaklaşımla kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında öncüdür.",
            /*BreadsCrumbs */
            AboutUsBread: "Hakkımızda",
            ProductsBread: "Ürünler",
            ContactBread: "İletişim",
            ReferanceBread: "Referanslar",
            ActivitiesBread: "Faaliyetler",
            /*Hakkımızda*/
            AboutUsTitle: "Hakkımızda",
            AboutUsFirstP:
                "Niksa Metal, Bursa merkezli operasyonu ve 30 yılı aşkın tecrübesiyle; kaynaklı imalat, yüzey işlem ve metal kaplama alanlarında projelerini ilerletmektedir. Şirketimiz yenilenen dinamizm ve üst seviye geliştirilmiş çalışma prensipleriyle faaliyetlerine hızla devam etmektedir.",
            AboutUsSecondP:
                "Müşteri memnuniyetini misyonumuzun merkezine koyarak ilerlediğimiz bu yolda, beklentilerinizin kusursuz bir şekilde karşılanması için büyük bir disiplinle çalışıyoruz.",
            AboutUsThirdP:
                "Zamana karşı dayanıklı metal bileşenleri zanaatkarlığın ve ileri teknolojinin desteğiyle Niksa Metal’de keşfedin. İhtiyaçlarınıza yönelik kaliteli ve güçlü çözümler üretme yolculuğunda güvenilir ortağınız olmaktan gurur duyuyoruz.",
            AboutUsCertificate: "Sertifikalarımız",
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
            /*Header*/
            HeaderHome: "Anasayfa",
            HeaderAboutUs: "Hakkımızda",
            HeaderProduct: "Ürünler",
            HeaderOurDealers: "Bayilerimiz",
            HeaderCatalog: "Katalog",
            HeaderContact: "İletişim",
            HeaderReferance: "Referanslar",
            HeaderActivities: "Faaliyetler",
            /*Footer*/
            FooterHome: "Anasayfa",
            FooterAboutUs: "Hakkımızda",
            FooterProduct: "Ürünler",
            FooterCatalog: "Katalog",
            FooterContact: "İletişim",
            FooterContactİnfo: "İletişim Bilgilerimiz",
            FooterReferance: "Referanslar",
            FooterActivities: "Faaliyetler",
        },
    },
    en: {
        translation: {
            /*Anasayfa*/
            HomePageProduct: "Our Products",
            HomePageWhoWeAre: "Who We Are?",
            HomePageWhoWeAreText:
                "Niksa Metal, with its Bursa-based operation and more than 30 years of experience; advances its projects in the fields of welded manufacturing, surface treatment and metal coating.",
            HomePageMission: "Mission",
            HomePageMissionText:
                "Maintaining its leading position in the industry, it aims to offer a combination of advanced technology and craftsmanship in the fields of welded manufacturing, surface treatment and metal coating.",
            HomePageVision: "Vission",
            HomePageVisionText:
                "Focusing on customer satisfaction, Niksa Metal works meticulously to meet expectations.",
            HomePageProductionFacility: "Production Facility",
            HomePageProductionFacilityText:
                "In our production facility with modern technology, we produce our quality products meticulously. By focusing on high standards and customer satisfaction, we are a pioneer in the sector.",
            HomePageQuality: "Quality",
            HomePageQualityText:
                "With more than 30 years of experience, it is a pioneer in the fields of welded manufacturing, surface treatment and metal coating with an approach that does not compromise on quality.",

            /*BreadsCrumbs */
            AboutUsBread: "About Us",
            ProductsBread: "Products",
            ContactBread: "Contact",
            ReferanceBread: "References",
            ActivitiesBread: "Activities",
            /*Hakkımızda*/
            AboutUsTitle: "About Us",
            AboutUsFirstP:
                "Niksa Metal, with its Bursa-based operation and more than 30 years of experience; advances its projects in the fields of welded manufacturing, surface treatment and metal coating. Our company continues its activities rapidly with renewed dynamism and highly developed working principles.",
            AboutUsSecondP:
                "We are working with great discipline to ensure that your expectations are met perfectly on this path that we progress by putting customer satisfaction at the center of our mission.",
            AboutUsThirdP:
                "Discover metal components that stand the test of time with the support of craftsmanship and advanced technology at Niksa Metal. We are proud to be your trusted partner in the journey to produce quality and strong solutions for your needs.",
            AboutUsCertificate: "Our Certificates",
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
            /*Header*/
            HeaderHome: "Home",
            HeaderAboutUs: "About Us",
            HeaderProduct: "Products",
            HeaderOurDealers: "Our Dealers",
            HeaderCatalog: "Catalog",
            HeaderContact: "Contact",
            HeaderReferance: "References",
            HeaderActivities: "Activities",
            /*Footer*/
            FooterHome: "Home",
            FooterAboutUs: "About us",
            FooterProduct: "Products",
            FooterCatalog: "Catalog",
            FooterContact: "Contact",
            FooterContactİnfo: "Contact İnformations",
            FooterReferance: "References",
            FooterActivities: "Activities",
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
