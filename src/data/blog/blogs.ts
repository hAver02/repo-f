import { Blog } from "@/modules/common/types/blog";

export const blogs: Blog[] = [
    {
        
         id: 1,
            titulo: "Aws y sus principales servicios",
            image: "/images/aws-services.jpg",
            resumen: "Amazon Web Services (AWS) ofrece una amplia gama de servicios en la nube que facilitan el desarrollo, escalabilidad y seguridad de aplicaciones. En este artículo, exploramos sus principales servicios y casos de uso.",
            data: "AWS es una de las plataformas en la nube más utilizadas a nivel mundial, ofreciendo soluciones para almacenamiento, bases de datos, cómputo y seguridad. Algunos de sus servicios más esenciales incluyen EC2 para instancias de servidores virtuales, S3 para almacenamiento escalable de objetos, RDS para bases de datos relacionales administradas, Lambda para ejecución de código sin servidores y API Gateway para gestionar API de manera eficiente. Gracias a estos servicios, AWS permite a los desarrolladores construir aplicaciones robustas y escalables sin preocuparse por la infraestructura física.",
            date: new Date("2024-02-25")
        
    },{
      id: 2,
      titulo: "Express vs Nest.js: ¿Cuál elegir?",
      image: "/images/express-vs-nest.jpg",
      resumen: "Comparación entre Express y Nest.js, dos opciones populares para construir APIs en Node.js. Analizamos sus diferencias, ventajas y cuándo usar cada una.",
      data: "Express es un framework minimalista y flexible para construir APIs en Node.js. Es una gran"  + 
      "opción si necesitas rapidez y simplicidad, pero requiere más configuración para grandes proyectos. Por otro lado," +
       "Nest.js ofrece una arquitectura modular basada en TypeScript, inspirada en Angular, lo que facilita la escalabilidad"  +
       "y mantenibilidad. Si necesitas una API robusta y bien estructurada, Nest.js puede ser la mejor opción. Aquí analizamos" +
       " los casos de uso ideales para cada tecnología.",
      date: new Date("2024-02-20")
    },
    {
      id: 3,
      titulo: "Cómo manejar autenticación en aplicaciones Full Stack",
      image: "/images/authentication.jpg",
      resumen: "Exploramos las mejores estrategias para implementar autenticación en una aplicación full stack utilizando JWT, OAuth y otras técnicas.",
      data: "La autenticación es una parte fundamental de cualquier aplicación full stack. Uno de los métodos más utilizados es JWT (JSON Web Token), que permite autenticar usuarios de manera segura. También existen otras opciones como OAuth para autenticaciones con terceros (Google, Facebook, GitHub). En este artículo explicamos cómo implementar cada método y cuándo es mejor utilizar uno sobre otro.",
      date: new Date("2024-02-15")
    },
    {
      id: 4,
      titulo: "SQL y NOSQL",
      image: "/images/sql-vs-nosql.jpg",
      resumen: "Una comparación entre bases de datos SQL y NoSQL, sus ventajas y desventajas, y en qué casos es mejor elegir cada una.",
      data: "Las bases de datos SQL, como PostgreSQL y MySQL, son ideales para datos estructurados con relaciones claras. Son la mejor opción cuando se requiere integridad de datos y transacciones complejas. En cambio, NoSQL, como MongoDB, es mejor para datos no estructurados o con cambios frecuentes en el esquema. Aquí exploramos las diferencias y cuándo deberías optar por una sobre la otra en un proyecto full stack.",
      date: new Date("2024-02-10")
    },
    {
        id: 5,
        titulo: "Next.js vs React: ¿Por qué elegir Next.js?",
        image: "/images/next-vs-react.jpg",
        resumen: "Next.js ofrece múltiples beneficios sobre React puro, incluyendo SSR, SSG y optimización de rendimiento. En este artículo, exploramos sus ventajas y cuándo deberías usarlo.",
        data: "React es una biblioteca de frontend muy popular, pero cuando se trata de rendimiento y SEO, puede quedarse corto si no se usa correctamente. Next.js, en cambio, agrega características clave como Server-Side Rendering (SSR) y Static Site Generation (SSG), lo que mejora significativamente la velocidad de carga y la optimización en buscadores. Además, Next.js facilita el manejo de rutas y ofrece soporte integrado para API routes. Si buscas mejorar la experiencia del usuario y la eficiencia de tu aplicación, Next.js es una excelente opción.",
        date: new Date("2024-02-25")
    }
    
  ];