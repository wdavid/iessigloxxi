import { FaBook, FaUserFriends, FaChalkboardTeacher, FaBookmark, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import { FaHandsHelping, FaUsers, FaHome, FaPaintBrush, FaUserTimes } from 'react-icons/fa';
const en = {
  // Navbar
  centro: "Center",
  documentacion: "Documentation",
  planes: "Plans & Projects",
  enlaces: "Useful Links",
  quienesSomos: "About Us",
  organizacion: "Organization",
  fp: "FP",
  eso: "ESO",
  secretaria: "Secretary",
  modoClaro: "Light Mode",
  modoOscuro: "Dark Mode",
  cambiarIdioma: "Change Language",
  programaciones: "Programs",
  proyectoEducativo: "Educational Project",
  planDeCentro: "Center Plan",
  ProaTransformate: "PROA + Transform Yourself",
  auladeEmprendimiento: "Entrepreneurship Classroom",
  bilinguismo: "Bilingualism",
  erasmus: "ERASMUS+",
  comunidadaprendizaje: "Learning Community",
  masequidad: "More Equity",
  proa: "PROA",
  biblioteca: "Library",
  enlacesInteres: "Interesting Links",
  iPasen: "iPasen",
  secretariaVirtual: "Virtual Secretary",

  // Home
  descriptionhome1: "We aim to provide a holistic education, preparing our students for the future not only with knowledge but also with socialization, integration, and coexistence skills in the digital society of the 21st century. JOIN OUR BIG FAMILY, WE'RE WAITING FOR YOU!",
  home: {
    welcome: "Welcome to",
    title: "IES SIGLO XXI",
    paragraphs: [
      "Our educational offer covers from Compulsory Secondary Education (ESO) to Vocational Training, including Dual Vocational Training places. We are a bilingual center in French, which allows us to provide an enriched education in a multicultural environment. Currently, we have Intermediate Vocational Training programs in Welding and Boilermaking, belonging to the professional family of Manufacturing and Assembly.",
      "Starting in the 2024/2025 school year, our DUAL VET students will have the opportunity to combine classroom training with internships in partner companies, allowing them to gain real-world experience in the productive sector.",
    ],
    imageCaption: "Photograph of IES SIGLO XXI",
    locationTitle: "Our Location",
  },

  footer: {
    title: "IES Siglo XXI",
    description: "Shaping the future with quality education. Join our educational community in Seville.",
    contactTitle: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    address: "C. Torrelaguna, s/n, 41016 Seville",
    rights: "All rights reserved"
  },

  about: {
    title: "About Us",
    paragraphs: [
        "Towards the end of the 20th century, our center, IES Siglo XXI, took its first steps as a Secondary Education Center. Later, we grew with Vocational Training programs, starting with Basic Training for those who wanted to re-engage in a professional orientation within the Manufacturing and Assembly family, and now we offer an Intermediate Level in Welding and Boilermaking. Next year, 2024/2025, we will launch our Dual Vocational Training program, where students receive training at our center while also putting what they learn into practice at a worksite within one of our partner companies.",
        "Throughout the years, we have participated in various Plans and Programs that have allowed us to expand our teachings with different methodologies, with resources both material and human that have enriched our students. We are currently a Bilingual French Center, participating in the Andalusian Network, Peace Space School, and starting next year our participation in the Learning Community network, beginning our Dream Phase.",
        "We have received several awards in different categories at the national, provincial, and neighborhood levels from various entities, including the Ministry, Government, and Education departments, as well as from our City Council. Additionally, we have received various sports awards. Examples include the Honor Institution Award to IES Siglo XXI as the Educational Community of the Torreblanca de los Caños neighborhood, recognition for work in preventing and intervening against absenteeism by the Neighborhood Association 'La Casa del Barrio,' the Carmen Hombre Ponzoa Award for enthusiastic contributions to children and youth from the Autonomous Council of Evangelical Culture in Andalusia, and recognition from our City Council, which also awards our students the Academic and Personal Achievement Award each year.",
        "Our greatest satisfaction is seeing our students leave satisfied and proud of having completed their studies and witnessing their joy when they visit us, acknowledging the importance of their time at the center and the significant role their teachers played in their lives.",
        "We encourage resilience and personal growth - invictus - transmitting a clear message of overcoming adversity in life and studies, reinforcing their learning in a personalized way adapted to their unique needs.",
        "We aim to improve coexistence among different nationalities, becoming a benchmark in education and social coexistence. We seek to provide a future outlook and social integration, becoming a place that generates opportunities in this digitally transforming society. Our goal is for students to acquire both knowledge and essential skills for any 21st-century citizen, such as socialization and integration in a diverse society where the basics of their curriculum, learning, and training are essential.",
        "We consider it essential that our students don't just walk aimlessly. NOT WALK JUST TO WALK... WALK TO GROW, little by little, understanding."
    ],
  },

  org: {
    institutoStructureTitle: "Institute Structure",
    puestos: {
      inglesFrances: "English-French Teacher",
      apoyoCientifico: "Science and Technology Support",
      orientacion: "Educational Guidance P.E.S.",
      religion: "Religion",
      lenguaLiteratura: "Spanish Language and Literature P.E.S.",
    },
  },

  formp: {
    title: "VOCATIONAL TRAINING",
    programas: [
      {
        title: "Basic Training Cycle in Manufacturing and Assembly",
        description: "This title trains students to perform fundamental machining and assembly tasks in mechanical manufacturing, working with materials such as ferrous metals, non-ferrous metals, and techno-plastics. It also allows students to acquire skills in the installation and maintenance of plumbing, heating, and air conditioning systems. All this is carried out under quality standards, following occupational safety and environmental protection regulations, and promotes oral and written communication in Spanish, in some cases in the co-official language, and in a foreign language.",
        image: "/taller1.jpeg",
        link: "https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-basica/detalle-titulo?idTitulo=146",
      },
      {
        title: "Intermediate Degree Training in Welding and Boiler Making",
        description: "This title enables students to carry out manufacturing, assembly, and repair processes in boiler making, piping, metal structures, and metal carpentry. This includes the application of welding, machining, and forming techniques, always meeting quality, occupational safety, and environmental protection standards.",
        image: "/soldaduria.jpg",
        link: "https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-grado-medio/detalle-titulo?idTitulo=12",
      },
    ],
    moreInfo: "More Information...",
    distrib: "Hour Distribution",
  },

  esob: {
    title: "COMPULSORY SECONDARY EDUCATION",
    programas: [
      {
        title: "Educational Offer",
        description1: "First and second year of Compulsory Secondary Education",
        description2: "Third and fourth year of Compulsory Secondary Education",
      },
      {
        title: "French Bilingual Center",
        description1: "Temporary Classroom for Language Adaptation (ATAL)",
        description2: "Curricular Diversification Program",
      },
    ],
  },

  secret: {
    title: "Secretariat",
    scheduleTitle: "Secretariat Hours",
    schedule: "From 10:00 to 12:30",
    contactTitle: "Contact numbers for appointments",
    contactNumbers: [
      { title: "Main Phone", phone: "955 623 672" },
      { title: "Secondary Phone", phone: "671 594 601" },
    ],
  },
  
  biblio: {
    title: "School Library",
    description: [
      "The School Library covers approximately 60 square meters, located on the second floor of the building's right wing. This spacious, bright, and welcoming area is equipped with display cabinets, tables, computers, and decorations created by the students, providing an ideal setting for study and reading.",
      "The Library is available during school hours, from 8:00 AM to 2:30 PM, and also during breaks, supervised by the faculty of the Support Team. Its primary goal is to promote reading and support the curriculum of various subjects."
    ],
    servicesTitle: "Library Services",
    services: [
      { icon: FaBook, title: "Loan and Consultation", description: "Loan service and supervised consultation of all School Library resources." },
      { icon: FaUserFriends, title: "Support and Guidance", description: "Guidance for the educational community in documentary and bibliographic research." },
      { icon: FaChalkboardTeacher, title: "Resource Acquisition", description: "Attending to the needs for acquiring bibliographic resources for the school." },
      { icon: FaBookmark, title: "Reading Activities", description: "Organization of activities to promote reading engagement and comprehension." },
      { icon: FaGlobe, title: "Department Connections", description: "Coordination with departments for acquiring new resources." },
      { icon: FaCalendarAlt, title: "Events and Celebrations", description: "Organizing events for commemorations, exhibitions, and competitions." },
    ],
    focusTitle: "Reading Promotion and Activities",
    focus: [
      "The library focuses on reading comprehension, reading engagement, and organizing activities such as discussions, writing workshops, illustrations, and more. These events aim to strengthen students' writing and speaking skills, creativity, and critical thinking.",
      "The library acts as a key resource center for various educational projects, offering documentary support and a physical space for activities and conferences."
    ],
    benefitsTitle: "Cross-Curricular Skills",
    benefits: [
      "Through the Library, students can develop cross-curricular skills such as information extraction, critical thinking, creativity, and reading comprehension. This promotes their holistic development across all areas of the curriculum."
    ]
  },
  comapren: {
    title: "Learning Community",
    objectives: [
      {
        icon: FaHandsHelping,
        title: "Impact and improve the learning outcomes of students",
        description: "The main goal of this project is to ensure that all the children in our school develop their intellectual and personal capacities to the fullest, without external social conditions limiting their expectations in achieving these goals."
      },
      {
        icon: FaUsers,
        title: "Establish appropriate social relationships and improve the climate of coexistence",
        description: "The community-based model for preventing and resolving conflicts suggests agreeing on the rules with all agents, so that the entire community commits to their enforcement."
      },
      {
        icon: FaChalkboardTeacher,
        title: "Improve the educational development of teachers",
        description: "Implementing a learning community project at the IES will involve continuous professional development in this project and in the Actuaciones Educativas de Éxito."
      },
      {
        icon: FaHome,
        title: "Encourage family involvement and the community of Torreblanca",
        description: "Involving families in the life of the school is one of the main motivations of this project. We are convinced that achieving this objective will facilitate the achievement of the other proposed goals."
      },
      {
        icon: FaPaintBrush,
        title: "Transform the environment by increasing its involvement with the school",
        description: "Adopting this project means introducing a related project: 'service learning.' Working with the community will allow for changes in the environment."
      },
      {
        icon: FaUserTimes,
        title: "Reduce school absenteeism and drop-out rates at the age of 16",
        description: "With all these previous objectives in place, we aim to achieve this final goal: increasing student attendance and preventing drop-out when students turn 16."
      }
    ]
  },  
  masequid: {
    "title": "More Equity",
    "titleobjetivos": "Project Objectives",
    "objetivos": [
      "Encourage motivation through hands-on activities.",
      "Spark students' interest in the school.",
      "Mobilize their creativity.",
      "Promote cooperative work.",
      "Connect the main places in the neighborhood with the school."
    ],
    "actuaciones": "Actions",
    "descpitactuaciones": "The actions are divided into several workshops:",
    "murodelapaz": "Peace Wall",
    "descmurodelapaz": "The mural will be created in pairs. One of the partners will allow their body to be outlined with chalk. Each will then fill in their silhouette with the color assigned to them. The result will be many silhouettes representing tolerance, equality, and the integration of all human beings, regardless of age, race, or religion.",
    "tallerceramica": "Ceramics Workshop",
    "desctallerceramica": "Different ceramic pieces will be created to develop students' motor skills. If there is time, a ceramic mural representing the school will be made.",
    "huellas": "Footprints",
    "deschuellas": "This workshop will focus on creating a visual change in the Torreblanca neighborhood. The goal is to connect the main places in the neighborhood through routes formed by human footprints. Each footprint will be structured with a word from a poem, a song, or a socially significant and humanitarian phrase chosen by the students. Each route will end at the Secondary School and can be linked to others.",
    "talleres": {
      "taller1": {
        "image": "/muropaz.png",
        "title": "Peace Wall",
        "description": "The mural will be created in pairs. One of the partners will allow their body to be outlined with chalk. Each will then fill in their silhouette with the color assigned to them. The result will be many silhouettes representing tolerance, equality, and the integration of all human beings, regardless of age, race, or religion."
      },
      "taller2": {
        "image": "/ceramica.png",
        "title": "Ceramics Workshop",
        "description": "Different ceramic pieces will be created to develop students' motor skills. If there is time, a ceramic mural representing the school will be made."
      },
      "taller3": {
        "image": "/huellas.png",
        "title": "Footprints",
        "description": "This workshop will focus on creating a visual change in the Torreblanca neighborhood. The goal is to connect the main places in the neighborhood through routes formed by human footprints. Each footprint will be structured with a word from a poem, a song, or a socially significant and humanitarian phrase chosen by the students. Each route will end at the Secondary School and can be linked to others."
      }
    }
  },  
  proaproyecto: {
    title: "PROA",
    titleobjetivos: "Project Objectives",
    objetivos: [
      "Increase general academic success rates.",
      "Improve the overall atmosphere and coexistence within the school.",
      "Improve the academic and social integration of students.",
      "Help them acquire planning and organization habits.",
      "Encourage and motivate study.",
      "Instill a positive attitude towards reading.",
      "Address negative school attitudes and habits."
    ],
    descripcion: [
      "The reinforcement program represents a unique opportunity to complement the learning done in the morning and solidify knowledge to meet the established objectives.",
      "Through this, students experiment, use, and apply communication skills in the school environment through the spontaneous use of language in the classroom, both in language teaching and non-linguistic subjects.",
      "This allows our students to improve their language skills.",
      "It is important for us to offer this opportunity to our students so they can continue their academic journey smoothly."
    ]
  },
  proat: {
    title: "PROA + Transform",
    description: [
      "The Program for Orientation, Advancement, and Educational Enrichment (PROA+) has as its fundamental axis the promotion of the necessary changes in the organizational culture of public schools with greater educational complexity to guarantee the academic success of all students, paying special attention to those in situations of greater vulnerability." ,
      "This program focuses on eliminating both educational and non-educational barriers that hinder students' academic success, establishing five strategic lines of action:"
    ],
    steps: [
      "Ensure the minimum conditions for students' educability.",
      "Support students with learning difficulties.",
      "Develop positive attitudes within the educational institution.",
      "Improve the teaching and learning process in aspects related to key competencies.",
      "Implement new forms of organization and management within the educational institution aimed at improving the educational success of all students."

    ]
  },
  aulaemp: {
    title: "Entrepreneurship Classroom",
    description: [
      "Project Objectives:",
      "Promote the entrepreneurial spirit as a transversal basic competency in students' learning processes by creating a versatile, flexible, and open space for the entire educational community and other external agents linked to vocational training. This space should facilitate a positive attitude toward entrepreneurship, encourage students to formulate innovative solutions to social problems, and design products with added socio-economic value.",
      "Specifically, the objectives established for this first phase of the Entrepreneurship Classroom project at IES Siglo XXI are as follows:",
      ],
    steps: [
      "Training the teacher responsible for the classroom, either through the Teacher Training Center (CEP) or by hiring a specialized company. This training can take place either in the educational institution or at the company or entity providing the training.",
      "Raise awareness among vocational training students about entrepreneurship in general, including its social, sustainable, or collaborative versions.",
      "Address the acquisition and development of 'soft skills' in vocational training students as a foundation for success as entrepreneurs, enhancing their autonomy, confidence, responsibility, decision-making in employability, and opening up new opportunities.",
      "Create a physical space that encourages creativity, innovation, teamwork, and consequently, innovation and entrepreneurship.",
      "Integrate the SDGs (Sustainable Development Goals) into the various activities carried out within the Entrepreneurship Classroom."
    ]
  },
  bilinguis: {
    title: "Bilingualism",
    description1: [
      "Bilingualism Coordinator: Alba Cienfuegos Izquierdo - acieizq594@g.educaand.es",
      "Our school has been bilingual in French since the 2007/08 academic year throughout the entire secondary level.",
      "Bilingual education provides a unique opportunity to experience, use, and apply communication skills in the school environment through the spontaneous use of the language in the classroom, both in language teaching and in non-linguistic subjects. Moreover, bilingual classes are supported by a native conversation assistant, bringing all the cultural richness that entails.",
      "This allows our students to improve their language skills, as in today's society, knowledge of more than one foreign language is increasingly important. For this reason, at our school, we offer students the chance to learn two foreign languages: French as the first foreign language and English as the second foreign language.",
    ],
    description2: [
      "For us, it is important to give this opportunity to our students so they are not disadvantaged in an increasingly demanding job market for foreign language skills.",
      "Furthermore, at I.E.S. Siglo XXI, we enjoy learning French and discovering Francophone culture... Here are some examples of activities we carry out as part of Bilingualism:",
    ],
    talleres: [
      "1. Crepe and Brussels waffle workshops.",
      "2. Activities for Andalusia Day.",
      "3. Our 'Wall of I Love You' for Valentine's Day.",
      "4. We celebrate Environment Day.",
    ],
  },
  erasmusp: {
    title: "ERASMUS+",
    description: "This project aims to contribute to the transformation process of the school into a Learning Community, to strengthen its structures, open the institute, enrich its educational offerings, and awaken new perspectives within the educational community that forms it.",
    tobjetivo: "Project Objectives",
    tituloobj: [
      "Learning Communities",
      "Digital Competences",
      "Innovative Methodologies",
    ],
    objdescript: [
      "To learn about and comparatively study Learning Community experiences in European educational contexts, with possible applications in our school.",
      "To improve teachers' digital skills for the digital transformation of the school, encouraging the use of new technologies and innovative teaching methods.",
      "To explore methodologies for teaching subjects with foreign languages and to foster a culture of European mobility within the school.",
    ],
  }
  
};

export default en;
