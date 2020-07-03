/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  // browserTabTitle: 'Ultra-Fast Fibre',
  // emailSubject: 'Ultra-Fast Fibre To Your Home',
  // emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.',
  // mainNavButtons: [
  //   {
  //     buttonText: 'I live in the CONSERVATORY',
  //     page: 'page-1',
  //     section: null,
  //     url: null
  //   },
  //   {
  //     buttonText: 'I live in the QV1',
  //     page: 'page-2',
  //     section: null,
  //     url: null
  //   },
  //   {
  //     buttonText: 'I live in the AURORA',
  //     page: 'page-3',
  //     section: null,
  //     url: null
  //   },
  //   {
  //     buttonText: 'I live in another CBD building',
  //     page: null,
  //     section: null,
  //     url: 'https://pineapple.net.au'
  //   }
  // ],
  // top: {
  //   header: 'Get 1 Month Of Free 1000Mbps Fibre Internet In These 3 Prestigious Apartments',
  //   text: 'Pineapple Net’s full-fibre is the internet Melbourne’s been missing. Faster, cheaper and more reliable than your NBN.<br>Connect and get your first month for FREE. Offer available in Melbourne’s CBD highrise apartments: The Aurora, Conversatory and QV1.',
  //   pictureURL: 'buildings/melbourne-large-1.jpg'
  // },
  // greenSection: {
  //   header: 'Powered By DGtek',
  //   text: 'DGtek is an infrastructure provider running fibre optics down Melbourne’s streets. We retail their world-class FTTP network, and that’s how our residential speeds are faster and cheaper than all our competitors.'
  // },
  // plans: {
  //   header: 'We Told You It Was Cheap',
  //   button: 'Contact us',
  //   goto: '#top'
  // },
  // list: {
  //   header: 'Unlimited Internet Superior Technology',
  //   text: 'No data caps to stop you or congestion to slow you down! With fibre, you’ll download at breakneck speeds, stream in 4K without pause and experience crystal clear video calls with friends and family at home and abroad.',
  //   button: 'Get in Touch',
  //   goto: '#top',
  //   items: [
  //     {
  //       title: 'Lightspeed',
  //       icon: 'https://api.pineapple.net.au/icons/android-chrome-512x512.png',
  //       text: 'Fast in both directions. For downloads, we are 10-20x faster than an NBN connection. For uploads, there is no competition - up to 25x faster than the NBN’s fastest.'
  //     },
  //     {
  //       title: 'Bulletproof',
  //       icon: 'https://api.pineapple.net.au/icons/android-chrome-512x512.png',
  //       text: 'Fibre is reliable. It won’t let you down when you’re in a Zoom meeting with colleagues or a FaceTime with the family. Our 99.9% network uptime is without equal. That’s years without a single outage.'
  //     },
  //     {
  //       title: 'Affordable',
  //       icon: 'https://api.pineapple.net.au/icons/android-chrome-512x512.png',
  //       text: 'Fibre from $50 helps you tighten the belt without feeling the pinch. Not only does our superior fibre outperform the NBN,  for comparable speeds, but it is also cheaper. And for our gigabit speeds, it’s still a great deal.'
  //     }
  //   ]
  // },
  // howToConnect: {
  //   header: 'Everything You Need To Know To Connect',
  //   text: 'There are a couple of options and a 1 month free promo available to you when connecting to Pineapple Net’s residential fibre.',
  //   button: 'Enquire Now',
  //   goto: '#top',
  //   items: [
  //     {
  //       icon: 'https://api.pineapple.net.au/icons/icon-1.svg',
  //       title: 'Flexible. No Contract',
  //       text: 'Pay a $99 connection fee for your fibre and router, and we won’t ask you to sign anything. Upgrade or downgrade at any time, or leave when you want.'
  //     },
  //     {
  //       icon: 'https://api.pineapple.net.au/icons/icon-2.svg',
  //       title: '12 Month Contract',
  //       text: 'Ready for a commitment? You can sign up to a 12-month contract and we’ll waive all the connection fees.'
  //     },
  //     {
  //       icon: 'https://api.pineapple.net.au/icons/icon-3.svg',
  //       title: '1 Month Free Internet',
  //       text: 'To sweeten the deal, we are giving all residents of the Aurora, Conservatory and QV1 buildings their first month for free.'
  //     }
  //   ]
  // },
  // testimonials: {
  //   header: 'The Social Proof We Are Amazing',
  //   button: 'Try it for yourself',
  //   goto: '#top'
  // },
  // faq: {
  //   header: 'We’ve Answered Some Common Questions',
  //   button: 'Get in Touch',
  //   goto: '#top',
  //   items: [
  //     {
  //       question: 'How is DGtek Fibre Different to the NBN?',
  //       answer: `Let’s make one thing very clear, DGtek is not the NBN.<br>
  //                DGtek is an independent fibre infrastructure provider local to Melbourne.<br>
  //                Pineapple Net retails DGtek, not the NBN.<br>
  //                While the NBN connects customers with 7 different technologies, DGtek only uses fibre to the home.<br>
  //                DGtek fibre is the same technology that is used across Europe, Japan, New Zealand, and it’s what Google used in their US rollout.<br>
  //                <li style='text-indent: 25px'>• Fibre is capable of faster speeds - Up to 10Gbps</li>
  //                <li style='text-indent: 25px'>• Fibre is stronger- less prone to breakage and doesn’t require as much maintenance</li>
  //                <li style='text-indent: 25px'>• Fibre performs better in hot temperatures and over long distances</li>
  //                By every metrics, fibre is the superior technology for delivering internet to Melbourne’s homes.<br>
  //                In addition to DGtek’s infrastructure using better technology, their cables are only 3 - 5 years old.<br>
  //                The average piece of NBN copper is 30 years old.<br>
  //                Australian internet really is in a sorry state.  Our National Broadband Network is mostly Telstra and Optus’s old Telephone and PayTV cables repurposed.<br>
  //                That’s why the whole nation is plagued by network outages, and it’s why DGtek fibre is unmatched for reliability.
  //       `
  //     },
  //     {
  //       question: 'How is Pineapple Net Cheaper Than Every Other Internet Provider?',
  //       answer: `DGtek is cheaper for us to retail.<br>
  //                As a new Aussie ISP, we’d struggle to retail the NBN. Unless your one of the big players, the so-called “open access” NBN is practically inaccessible.<br>
  //                We pass these savings down to our customers.<br>
  //                That’s why our 50Mbps plan is the cheapest on the market.<br>
  //                And why our 150Mbps plan is less than any NBN 100 plan, although 50Mbps faster for downloads and 110Mbps faster for uploads.<br>
  //       `
  //     },
  //     {
  //       question: 'What are Symmetrical Speeds?',
  //       answer: `Symmetrical speeds are when your upload speeds are as fast as your download speeds.<br>
  //                That means that a plan with 500Mbps download has 500Mbps uploads.<br>
  //                You’ve probably noticed that all RSPs retailing the NBN talk about their downloads a lot more than their uploads. That’s because NBN uploads are a lot slower for residential connections.<br>
  //                100Mbps/40Mpbs --- 100Mbps download --- 40Mbps upload.<br>
  //                While Pineapple Net retails symmetrical speeds.<br>
  //                We do this because it’s easy. There is so much extra bandwidth with a full-fibre connection that we don’t need to limit our uploads. And we know it’s helpful for the work from home crowd, social and business video calls and will even save people time when they upload to social media.
  //       `
  //     },
  //     {
  //       question: 'What Can I Do With Fibre? ',
  //       answer: `Nothing you couldn’t do with your NBN connection. It’s just an all-round better experience. You can download large files quicker, stream in higher resolutions, upload massive files in a fraction of the time and of course, fibre is way more reliable so you won’t drop calls to your work colleagues or loved ones.<br>
  //                There is no evening congestion, no unexplainable internet slow days and practically no network outages.<br>
  //                Since DGtek launched their fibre in 2016, our customers have enjoyed 99.9% network uptime. Years have passed without a single dropout. That feat is unthinkable on the NBN.
  //       `
  //     }
  //   ]
  // },
  // footer: {
  //   topHead: 'READY TO GET STARTED?',
  //   topText: "Leave your inquiry and we'll get back to you within 24 hours on business days",
  //   button: 'GET STARTED',
  //   goto: '#top'
  // }
}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/2`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_BUTTONS: (state) => {
    state.top.buttons = state.mainNavButtons
  },
  UPDATE_ALL: (state, payload) => {
    for (const field in payload) {
      if (typeof payload[field] !== 'object') {
        state[field] = payload[field] || state[field]
      } else {
        if (Array.isArray(payload[field])) {
          state[field] = Object.assign([], payload[field])
        } else {
          state[field] = Object.assign({}, payload[field])
        }
      }
    }
  }
}

const actions = {
  async GET_CONTENT ({ state, getters, commit, dispatch }) {
    const content = await (await fetch(getters.contentEndpoint)).json()
    for (const field in content) {
      commit('SET_PROPERTY', {
        object: state,
        propertyName: field,
        value: content[field]
      }, { root: true })
    }
    return state.browserTabTitle
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
