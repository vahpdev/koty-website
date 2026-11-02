export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const ui = {
  es: {
    meta: {
      title: 'Koty — Tu sous-chef con IA',
      description:
        'Koty se engancha a la campana, mira toda la placa y te guía en tiempo real mientras cocinas. Compra única, app gratuita y privacidad local primero.',
    },
    valueProp:
      'Koty es un sous-chef con IA que se engancha a una campana existente y ayuda a cocinar en tiempo real en toda la placa, sin obras ni instalación fija.',
    hero: {
      eyebrow: 'Koty',
      title: 'Tu sous-chef con IA, enganchado a la campana.',
      subhead:
        'Observa toda la placa con visión, micro y sensor térmico; sigue una receta contigo o te avisa cuando algo necesita atención.',
      primaryCta: 'Únete a la lista',
      secondaryCta: 'Cómo funciona',
    },
    problem: {
      title: 'Cocinar es hacer mil cosas a la vez',
      items: [
        {
          title: 'La atención no llega a todo',
          text: 'Entre el fuego, el tiempo y los ingredientes, es fácil que algo se pase del punto o se quede atrás.',
        },
        {
          title: 'Las recetas asumen calma',
          text: 'Muchas recetas cuentan pasos como si pudieras mirarlas mientras cortas, remueves y controlas dos sartenes.',
        },
        {
          title: 'Los gadgets actuales son estrechos',
          text: 'Hornos y electrodomésticos con cámara ayudan dentro de un solo aparato; la placa sigue siendo territorio abierto.',
        },
      ],
    },
    solution: {
      title: 'Un copiloto para la placa que ya tienes',
      items: [
        {
          title: 'Sin obras',
          text: 'Se engancha a la campana con imán, clip o adhesivo y se recarga periódicamente.',
        },
        {
          title: 'Mira el conjunto',
          text: 'Su posición elevada cubre toda la zona de cocción, no solo un horno o una sartén.',
        },
        {
          title: 'Guía en el momento',
          text: 'Usa señales visuales, sonido y temperatura para orientarte mientras cocinas.',
        },
      ],
    },
    how: {
      title: 'Cómo funciona',
      steps: [
        {
          title: 'Engancha',
          text: 'Colócalo en la campana con el montaje que mejor encaje: imán, clip o adhesivo.',
        },
        {
          title: 'Cocina',
          text: 'Cocina como siempre. Koty observa la placa y entiende el contexto básico.',
        },
        {
          title: 'Recibe guía',
          text: 'Sigue una receta paso a paso o deja que te avise cuando algo necesite atención.',
        },
      ],
    },
    modes: {
      title: 'Dos modos, una cocina real',
      recipe: {
        title: 'Receta',
        text: 'Elige una receta y Koty sigue tu progreso paso a paso, marcando lo completado y lo que viene después.',
      },
      free: {
        title: 'Libre',
        text: 'Cocina sin receta fija; Koty observa el estado de la placa y avisa si detecta señales de riesgo o un paso olvidado.',
      },
    },
    capabilities: {
      title: 'Lo que ve, oye y calcula',
      items: [
        'Visión RGB para entender qué hay en la placa.',
        'Micrófono para pistas como hervor o chisporroteo.',
        'Sensor térmico para detectar tendencias de temperatura.',
        'Procesamiento local para lo sensible y salidas por voz, pantalla y app.',
      ],
    },
    privacy: {
      title: 'Privacidad desde el diseño',
      text: 'La parte sensible se procesa localmente siempre que sea posible. Solo se envía a la nube lo necesario para reconocer el plato o razonar la guía, con minimización de datos y sin subir vídeo bruto continuo.',
      points: [
        'RGPD: consentimiento claro y datos mínimos.',
        'Local primero: alertas básicas y prefiltro en el dispositivo.',
        'Sin vídeo bruto continuo: eventos y snapshots acotados.',
      ],
    },
    differentiation: {
      title: 'Hecho para cocinar como cocinas tú',
      items: [
        {
          title: 'Retrofit de verdad',
          text: 'No cambias la cocina: lo enganchas a la campana y ya está.',
        },
        {
          title: 'Toda la placa',
          text: 'Pensado para la zona de cocción completa, no para un solo electrodoméstico cerrado.',
        },
        {
          title: 'Cocina improvisada',
          text: 'Sirve tanto para seguir una receta como para rescatar una cena que se tuerce en el último minuto.',
        },
      ],
    },
    waitlist: {
      title: 'Únete a la lista',
      text: 'Te escribiremos cuando Koty esté disponible en España y la UE. Sin spam: solo novedades del lanzamiento.',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      consentLabel: 'Quiero recibir novedades de Koty y acepto la política de privacidad.',
      submit: 'Únete',
      success: 'Estás en la lista. Te escribiremos cuando Koty esté disponible.',
      error: 'No hemos podido guardar tu email. Revisa la dirección e inténtalo de nuevo.',
      note: 'Compra única. App gratuita. Sin suscripción.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Cuánto costará?',
          answer: 'El precio está por confirmar. Koty será una compra única de hardware y la app será gratuita, sin suscripción.',
        },
        {
          question: '¿Cuándo estará disponible?',
          answer: 'Estamos preparando la primera versión para España y la UE. Únete a la lista y te avisaremos cuando haya fecha.',
        },
        {
          question: '¿Necesita instalación?',
          answer: 'No. Se engancha a una campana existente con imán, clip o adhesivo y no requiere electricista ni cableado fijo.',
        },
        {
          question: '¿Funciona con inducción, vitrocerámica y gas?',
          answer: 'Ese es el objetivo de v1. Inducción y vitrocerámica ofrecen calor más uniforme; en gas haremos validación específica por la llama abierta.',
        },
        {
          question: '¿Qué pasa con mis datos?',
          answer: 'El diseño prioriza el procesamiento local y la minimización de datos. No subimos vídeo bruto continuo; solo usamos la información necesaria para guiarte.',
        },
        {
          question: '¿Habrá suscripción?',
          answer: 'No. El modelo es compra única de hardware con app gratuita.',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Koty — Your AI sous-chef',
      description:
        'Koty clips onto your range hood, watches the whole stovetop, and guides you in real time while you cook. One-time purchase, free app, local-first privacy.',
    },
    valueProp:
      'Koty is an AI sous-chef that clips onto an existing range hood and helps you cook in real time across the whole stovetop, with no renovation or fixed installation.',
    hero: {
      eyebrow: 'Koty',
      title: 'Your AI sous-chef, clipped to the hood.',
      subhead:
        'It watches the whole stovetop with vision, a microphone, and a thermal sensor; follow a recipe together or get a nudge when something needs attention.',
      primaryCta: 'Join the waitlist',
      secondaryCta: 'How it works',
    },
    problem: {
      title: 'Cooking is a thousand things at once',
      items: [
        {
          title: 'Attention cannot cover everything',
          text: 'Between heat, timing, and ingredients, it is easy for something to drift past its point or fall behind.',
        },
        {
          title: 'Recipes assume calm',
          text: 'Many recipes list steps as if you could read them while chopping, stirring, and watching two pans.',
        },
        {
          title: 'Current gadgets are narrow',
          text: 'Ovens and camera-equipped appliances help inside one sealed device; the stovetop is still open territory.',
        },
      ],
    },
    solution: {
      title: 'A co-pilot for the stovetop you already have',
      items: [
        {
          title: 'No renovation',
          text: 'It clips onto the hood with a magnet, clip, or adhesive mount and recharges periodically.',
        },
        {
          title: 'Sees the whole picture',
          text: 'Its raised position covers the full cooking zone, not just one oven or one pan.',
        },
        {
          title: 'Guidance in the moment',
          text: 'It uses visual cues, sound, and temperature to orient you while you cook.',
        },
      ],
    },
    how: {
      title: 'How it works',
      steps: [
        {
          title: 'Clip it on',
          text: 'Place it on the hood with the mount that fits best: magnet, clip, or adhesive.',
        },
        {
          title: 'Cook',
          text: 'Cook as usual. Koty watches the stovetop and understands the basic context.',
        },
        {
          title: 'Get guidance',
          text: 'Follow a recipe step by step or let it flag when something needs attention.',
        },
      ],
    },
    modes: {
      title: 'Two modes, one real kitchen',
      recipe: {
        title: 'Recipe',
        text: 'Choose a recipe and Koty tracks your progress step by step, marking what is done and what comes next.',
      },
      free: {
        title: 'Freeform',
        text: 'Cook without a fixed recipe; Koty watches the state of the stovetop and flags risk signals or a missed step.',
      },
    },
    capabilities: {
      title: 'What it sees, hears, and measures',
      items: [
        'RGB vision to understand what is on the stovetop.',
        'A microphone for cues like boiling or sizzling.',
        'A thermal sensor to spot temperature trends.',
        'Local processing for sensitive signals, with voice, screen, and app outputs.',
      ],
    },
    privacy: {
      title: 'Privacy by design',
      text: 'Sensitive processing stays local whenever possible. Only what is needed to recognize the dish or reason about guidance goes to the cloud, with data minimization and no continuous raw video upload.',
      points: [
        'GDPR: clear consent and minimal data.',
        'Local first: basic alerts and pre-filtering on the device.',
        'No continuous raw video: bounded events and snapshots.',
      ],
    },
    differentiation: {
      title: 'Made for how you actually cook',
      items: [
        {
          title: 'True retrofit',
          text: 'You do not replace the kitchen: clip it to the hood and it is ready.',
        },
        {
          title: 'The whole stovetop',
          text: 'Built for the full cooking zone, not for one closed appliance.',
        },
        {
          title: 'Improvised cooking',
          text: 'Useful both for following a recipe and for rescuing a dinner that goes sideways at the last minute.',
        },
      ],
    },
    waitlist: {
      title: 'Join the waitlist',
      text: 'We will write when Koty is available in Spain and the EU. No spam: launch updates only.',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      consentLabel: 'I want Koty updates and I accept the privacy policy.',
      submit: 'Join',
      success: 'You are on the list. We will write when Koty is available.',
      error: 'We could not save your email. Check the address and try again.',
      note: 'One-time purchase. Free app. No subscription.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'How much will it cost?',
          answer: 'Pricing is to be confirmed. Koty will be a one-time hardware purchase and the app will be free, with no subscription.',
        },
        {
          question: 'When will it be available?',
          answer: 'We are preparing the first version for Spain and the EU. Join the list and we will let you know when there is a date.',
        },
        {
          question: 'Does it require installation?',
          answer: 'No. It clips onto an existing hood with a magnet, clip, or adhesive mount and does not require an electrician or fixed wiring.',
        },
        {
          question: 'Does it work with induction, ceramic glass, and gas?',
          answer: 'That is the v1 goal. Induction and ceramic glass provide more uniform heat; gas will get specific validation because of the open flame.',
        },
        {
          question: 'What happens to my data?',
          answer: 'The design prioritizes local processing and data minimization. We do not upload continuous raw video; we only use the information needed to guide you.',
        },
        {
          question: 'Will there be a subscription?',
          answer: 'No. The model is a one-time hardware purchase with a free app.',
        },
      ],
    },
  },
} as const;
