
/* export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
]; */

export const ejemplos = [
    {
        before: '/public/antes1.png',
        after: '/public/despues1.png',
        title: 'Transformación de Juan'
    },
    {
        before: '/images/antes2.png',
        after: '/images/despues2.png',
        title: 'Resultados de María'
    },
    {
        before: '/images/antes1.png',
        after: '/images/despues1.png',
        title: 'Cambio de Carlos'
    }
];

export const programas = [
    {
        id: 1,
        name: 'Programa Básico',
        description: 'Incluye una consulta de nutrición y 4 sesiones de entrenamiento personalizadas.',
        price: '$150',
        details: [
            '1 Consulta de Nutrición',
            '4 Sesiones de Entrenamiento',
            'Plan de Alimentación Básico',
            'Seguimiento Mensual'
        ]
    },
    {
        id: 2,
        name: 'Programa Avanzado',
        description: 'Un paquete completo con consultas y sesiones adicionales para resultados óptimos.',
        price: '$300',
        details: [
            '2 Consultas de Nutrición',
            '8 Sesiones de Entrenamiento',
            'Plan de Alimentación Avanzado',
            'Seguimiento Semanal',
            'Acceso a Recursos Exclusivos'
        ]
    },
    {
        id: 3,
        name: 'Programa Premium',
        description: 'El paquete más completo con apoyo continuo y consultas personalizadas.',
        price: '$500',
        details: [
            '4 Consultas de Nutrición',
            '12 Sesiones de Entrenamiento',
            'Plan de Alimentación Personalizado',
            'Seguimiento Diario',
            'Asesoramiento 24/7'
        ]
    }
];

export const beneficios = [
    {
        id: 1,
        title: 'Pérdida de Peso',
        description: 'Combina una dieta equilibrada con un plan de entrenamiento para quemar grasa y mantener un peso saludable.',
        Image: '/public/benficio1.png', // Usa un icono relevante
    },
    {
        id: 2,
        title: 'Aumento de Energía',
        description: 'Mejora tus niveles de energía diaria con un plan de nutrición y ejercicio personalizado.',
        Image: '/public/benficio2.png',
    },
    {
        id: 3,
        title: 'Mejora del Rendimiento Físico',
        description: 'Optimiza tu rendimiento en el gimnasio y en tu vida diaria con una combinación de ejercicios y alimentación adecuada.',
        Image: '/public/benficio3.png',
    },
    {
        id: 4,
        title: 'Salud General',
        description: 'Fomenta un bienestar integral cuidando tu cuerpo desde el interior con hábitos alimenticios saludables y entrenamiento regular.',
        Image: '/public/benficio4.png',
    },
];

export const testimonials = [
    {
        id: 1,
        quote:
            "Trabajar con Daniel para renovar nuestra web de gimnasio fue una experiencia excelente. Capturó a la perfección la esencia de nuestro espacio y mejoró la funcionalidad del sitio, facilitando a nuestros miembros encontrar toda la información que necesitan. Su enfoque profesional y su atención a los detalles realmente hicieron la diferencia. ¡Recomiendo a Daniel sin dudarlo!",
        name: "Carlos Villafaña",
        title: "Gimnasio Muscle Machine",
        image: '/public/test1.png',
        rating: 5,
    },
    {
        id: 2,
        quote:
            "Daniel hizo un trabajo fantástico con nuestro sitio web de clínica de salud. Su habilidad para traducir nuestras necesidades en un diseño intuitivo y profesional ha sido invaluable. El sitio no solo se ve increíble, sino que también ha mejorado la experiencia de nuestros pacientes al hacer la información y los servicios más accesibles. Estamos encantados con el resultado.",
        name: "Ana Luisa Gómez",
        title: "Clínica de Salud Vital",
        image: '/public/test2.png',
        rating: 5,
    },
    {
        id: 3,
        quote:
            "El rediseño del sitio web para nuestra carpintería por parte de Daniel ha sido sobresaliente. La galería de trabajos que creó resalta nuestras piezas de manera impresionante, y la navegación del sitio es mucho más fluida. Daniel entendió nuestra visión y la plasmó en un sitio web que realmente refleja la calidad de nuestro trabajo. ¡Estamos muy satisfechos con el resultado!",
        name: "Lucio Perez",
        title: "Carpintería y Madereria LP",
        image: '/public/test3.png',
        rating: 5,
    },
    {
        id: 4,
        quote:
            "La colaboración con Daniel para el sitio web de nuestro consultorio de nutrición ha sido increíble. Su capacidad para crear un diseño claro y funcional ha facilitado a nuestros clientes encontrar información relevante y programar citas. Su profesionalismo y compromiso con el proyecto fueron evidentes en cada etapa. Lo recomendaría sin dudarlo.",
        name: "Neri Villeda",
        title: "Consultorio Nutrición",
        image: '/public/test4.png',
        rating: 5,
    },
    {
        id: 5,
        quote:
            "Trabajar con Daniel en la web para nuestra escuela de inglés fue una experiencia excelente. Su habilidad para capturar la esencia de nuestro enfoque educativo y reflejarla en el diseño del sitio ha sido invaluable. La facilidad de uso y la claridad del sitio han mejorado significativamente la experiencia para nuestros estudiantes. Estamos muy contentos con el resultado.",
        name: "Luis V.",
        title: "Academia Inglés Griffin English",
        image: '/public/test5.png',
        rating: 5,
    },
];

/* 
export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", id: 1 },
    { src: twitter, alt: "twitter logo", id: 2 },
    { src: instagram, alt: "instagram logo", id: 3 },
]; */