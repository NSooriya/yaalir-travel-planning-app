import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Default translations (English only for now)
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        explore: "Explore",
        itinerary: "Plan Trip",
        marketplace: "Marketplace",
        profile: "Profile",
        login: "Login",
        register: "Register",
        logout: "Logout"
      },
      home: {
        hero_title: "Discover Tamil Nadu's Rich Heritage",
        hero_subtitle: "Explore ancient temples, historic monuments, and vibrant traditions",
        explore_btn: "Start Exploring",
        plan_btn: "Plan Your Trip",
        popular_title: "Popular Destinations",
        spiritual_title: "Spiritual Circuits",
        crafts_title: "Traditional Crafts"
      },
      explore: {
        title: "Explore Tamil Nadu Heritage",
        filter_all: "All",
        filter_historical: "Historical",
        filter_spiritual: "Spiritual",
        filter_crafts: "Crafts",
        entry_fee: "Entry Fee",
        timings: "Timings",
        view_map: "View on Map",
        bookmark: "Bookmark"
      },
      itinerary: {
        title: "Create Your Perfect Itinerary",
        travelers: "Number of Travelers",
        duration: "Trip Duration (days)",
        budget: "Budget Range",
        interests: "Interests",
        interest_historical: "Historical Sites",
        interest_spiritual: "Spiritual Places",
        interest_crafts: "Handicrafts",
        interest_food: "Food & Culture",
        generate_btn: "Generate Itinerary",
        save_btn: "Save Itinerary",
        day: "Day"
      },
      marketplace: {
        title: "Traditional Tamil Nadu Handicrafts",
        price: "Price",
        contact_seller: "Contact Seller",
        cultural_info: "Cultural Background"
      },
      profile: {
        title: "My Profile",
        bookmarks: "My Bookmarks",
        itineraries: "Saved Itineraries",
        edit: "Edit Profile",
        save: "Save Changes"
      },
      auth: {
        login_title: "Login to Your Account",
        register_title: "Create New Account",
        email: "Email",
        password: "Password",
        name: "Full Name",
        login_btn: "Login",
        register_btn: "Register",
        no_account: "Don't have an account?",
        have_account: "Already have an account?"
      },
      common: {
        loading: "Loading...",
        error: "Something went wrong",
        success: "Success!"
      }
    }
  },
  ta: {
    translation: {
      nav: {
        home: "முகப்பு",
        explore: "ஆராயுங்கள்",
        itinerary: "பயணம் திட்டமிடுங்கள்",
        marketplace: "சந்தை",
        profile: "சுயவிவரம்",
        login: "உள்நுழைய",
        register: "பதிவு செய்க",
        logout: "வெளியேறு"
      },
      home: {
        hero_title: "தமிழ்நாட்டின் வளமான பாரம்பரியத்தை கண்டறியுங்கள்",
        hero_subtitle: "பழமையான கோவில்கள், வரலாற்று நினைவுச்சின்னங்கள் மற்றும் துடிப்பான பாரம்பரியங்களை ஆராயுங்கள்",
        explore_btn: "ஆராய தொடங்குங்கள்",
        plan_btn: "உங்கள் பயணத்தை திட்டமிடுங்கள்",
        popular_title: "பிரபலமான இடங்கள்",
        spiritual_title: "ஆன்மீக சுற்றுகள்",
        crafts_title: "பாரம்பரிய கைவினைப்பொருட்கள்"
      },
      explore: {
        title: "தமிழ்நாடு பாரம்பரியத்தை ஆராயுங்கள்",
        filter_all: "அனைத்தும்",
        filter_historical: "வரலாற்று",
        filter_spiritual: "ஆன்மீகம்",
        filter_crafts: "கைவினைப்பொருட்கள்",
        entry_fee: "நுழைவு கட்டணம்",
        timings: "நேரங்கள்",
        view_map: "வரைபடத்தில் காண்க",
        bookmark: "புக்மார்க்"
      },
      itinerary: {
        title: "உங்கள் சரியான பயணத் திட்டத்தை உருவாக்குங்கள்",
        travelers: "பயணிகளின் எண்ணிக்கை",
        duration: "பயண காலம் (நாட்கள்)",
        budget: "பட்ஜெட் வரம்பு",
        interests: "ஆர்வங்கள்",
        interest_historical: "வரலாற்று தளங்கள்",
        interest_spiritual: "ஆன்மீக இடங்கள்",
        interest_crafts: "கைவினைப்பொருட்கள்",
        interest_food: "உணவு & கலாச்சாரம்",
        generate_btn: "பயணத் திட்டத்தை உருவாக்கு",
        save_btn: "பயணத் திட்டத்தை சேமி",
        day: "நாள்"
      },
      marketplace: {
        title: "பாரம்பரிய தமிழ்நாடு கைவினைப்பொருட்கள்",
        price: "விலை",
        contact_seller: "விற்பனையாளரை தொடர்பு கொள்ளுங்கள்",
        cultural_info: "கலாச்சார பின்னணி"
      },
      profile: {
        title: "எனது சுயவிவரம்",
        bookmarks: "எனது புக்மார்க்குகள்",
        itineraries: "சேமிக்கப்பட்ட பயணத் திட்டங்கள்",
        edit: "சுயவிவரத்தை திருத்து",
        save: "மாற்றங்களை சேமி"
      },
      auth: {
        login_title: "உங்கள் கணக்கில் உள்நுழையவும்",
        register_title: "புதிய கணக்கை உருவாக்கவும்",
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        name: "முழு பெயர்",
        login_btn: "உள்நுழைய",
        register_btn: "பதிவு செய்க",
        no_account: "கணக்கு இல்லையா?",
        have_account: "ஏற்கனவே கணக்கு உள்ளதா?"
      },
      common: {
        loading: "ஏற்றுகிறது...",
        error: "ஏதோ தவறு நடந்தது",
        success: "வெற்றி!"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        explore: "Explorer",
        itinerary: "Planifier le voyage",
        marketplace: "Marché",
        profile: "Profil",
        login: "Connexion",
        register: "S'inscrire",
        logout: "Déconnexion"
      },
      home: {
        hero_title: "Découvrez le riche patrimoine du Tamil Nadu",
        hero_subtitle: "Explorez des temples anciens, des monuments historiques et des traditions vibrantes",
        explore_btn: "Commencer l'exploration",
        plan_btn: "Planifiez votre voyage",
        popular_title: "Destinations populaires",
        spiritual_title: "Circuits spirituels",
        crafts_title: "Artisanat traditionnel"
      },
      explore: {
        title: "Explorer le patrimoine du Tamil Nadu",
        filter_all: "Tout",
        filter_historical: "Historique",
        filter_spiritual: "Spirituel",
        filter_crafts: "Artisanat",
        entry_fee: "Frais d'entrée",
        timings: "Horaires",
        view_map: "Voir sur la carte",
        bookmark: "Favori"
      },
      itinerary: {
        title: "Créez votre itinéraire parfait",
        travelers: "Nombre de voyageurs",
        duration: "Durée du voyage (jours)",
        budget: "Fourchette budgétaire",
        interests: "Intérêts",
        interest_historical: "Sites historiques",
        interest_spiritual: "Lieux spirituels",
        interest_crafts: "Artisanat",
        interest_food: "Nourriture et culture",
        generate_btn: "Générer l'itinéraire",
        save_btn: "Enregistrer l'itinéraire",
        day: "Jour"
      },
      marketplace: {
        title: "Artisanat traditionnel du Tamil Nadu",
        price: "Prix",
        contact_seller: "Contacter le vendeur",
        cultural_info: "Contexte culturel"
      },
      profile: {
        title: "Mon profil",
        bookmarks: "Mes favoris",
        itineraries: "Itinéraires enregistrés",
        edit: "Modifier le profil",
        save: "Enregistrer les modifications"
      },
      auth: {
        login_title: "Connectez-vous à votre compte",
        register_title: "Créer un nouveau compte",
        email: "Email",
        password: "Mot de passe",
        name: "Nom complet",
        login_btn: "Connexion",
        register_btn: "S'inscrire",
        no_account: "Vous n'avez pas de compte ?",
        have_account: "Vous avez déjà un compte ?"
      },
      common: {
        loading: "Chargement...",
        error: "Quelque chose s'est mal passé",
        success: "Succès !"
      }
    }
  }
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
