export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const Eventdata: {
  image: string;
  gallery: string[];
  title: string;
  isFeatured?: boolean;
  text: string;
  date: string;
  advertiseOnModal?: boolean;
  location: string;
  type: "Ongoing" | "Past" | "Upcoming";
  duration: string;
  category: string;
  detail?: string | null;
  slug: string;
  video?: string;
  feedback?: {
    allowFeedback: boolean;
    type: "url";
    url?: string;
    showFeedback: boolean;
    openSuggestionFields?: number[];
    graphFields?: {
      pieChart?: number[];
      linearChart?: Array<number | { index: number; scale: { min: number; max: number } }>;
    };
    sheetId?: string;
  } | null;
  content: {
    header: string | null;
    type: "html" | "pdf" | "doc" | "url";
    htmlContent: string | null;
    pdfContent: string | null;
    docContent: string | null;
    url: string | null;
    footer: string | null;
  } | null;
}[] = [
    {
      image: "/images/event/kibalo2.jpg",
      gallery: [
        "/images/event/kibalo6.jpg",
        "/images/event/kibalo7.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Think Tank Session towards commercialization of the value chain analysis and kibalo tools",
      isFeatured: false,
      slug: "think-tank-session-commercialization",
      text: "Think tank session on commercialization strategies for value chain analysis and Kibalo tools.",
      date: "2025-08-26",
      location: "Kampala, Kabira Country Club Hotel",
      type: "Past",
      duration: "26th - 29th August 2025",
      category: "Think Tank",
      detail: "The Productivity Acceleration Bureau under STI-OP is mandated to develop policies that promote innovative value chain management and the commercialization of research and innovation to drive productivity growth. Its objective is to support Uganda's Vision 2040 target of growing the national GDP to USD 550 billion by facilitating a mass shift from low-profit, low-impact investments to high-profit, high-impact enterprises within the money economy. This will be achieved through the application, commercialization, and wide distribution of proven tools such as Kibalo and value chain analysis to increase household incomes and improve the quality of life for Ugandans",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event/kibalo20.jpg",
      gallery: [
        "/images/event/kibalo2.jpg",
        "/images/event/kibalo21.jpg",
        "/images/event/kibalo23.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Conduct Kibalo for 150 Enterprises and Rank the Topmost 100 Using the STI-OP Kibalo Tool",
      isFeatured: false,
      slug: "kibalo-enterprise-ranking",
      text: "Enterprise analysis initiative evaluating 150 enterprises using the advanced Kibalo tool.",
      date: "2025-12-08",
      location: "Kampala, Fairway Hotel",
      type: "Past",
      duration: "8th - 12th, December 2025",
      category: "Kibalo Tool",
      detail: "The Productivity Acceleration Bureau of STI-OP developed a special tool (“Kibalo tool”) to guide investment decision-making processes by analyzing and identifying the most profitable enterprises for national qualitative economic leap. The tool has been developed and pending second testing. The tool has been proven highly effective during field piloting in providing simplified, user-friendly, and actionable business financial assessment insights for farmers, small enterprises, cooperatives and entrepreneurial youth groups. The results from the first pilot showed that the tool could work under single user mode. This could limit the mass analysis of many enterprises by different people at the same time. The new version has been modified to allow multiser mode for mass enterprise analysis. The next step is testing the multiuser and mass analysis mode while developing a compendium of the top profitable enterprises in Uganda to support enterprise-level investment decision making and national planning. As part of this process, the Bureau intends to organise a technical workshop to use the tool in analysing one hundred fifty (150) enterprises and ranking the top one hundred (100) most profitable amongst them.",
      content: null,
    },
    {
      image: "/images/event/kibalo11.jpg",
      gallery: [
        "/images/event/kibalo18.jpg",
        "/images/event/kibalo19.jpg",
        "/images/event/kibalo13.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Bukedi Youth Engagements for accelerated wealth creation",
      isFeatured: false,
      slug: "bukedi-youth-engagements",
      text: "Youth engagement program empowering over 31,000 youths through football and cultural activities.",
      date: "2025-12-28",
      location: "Bukedi Sub Region",
      type: "Past",
      duration: "28th Dec 2025 - 11th Jan 2026",
      category: "Youth Engagement",
      detail: `The Bukedi Youth Engagements activity was successfully implemented from 28th December 2025 to 11th January 2026 across the Bukedi sub-region. Organized by the Productivity Acceleration Bureau under the Science, Technology and Innovation Secretariat – Office of the President (STI-OP), in collaboration with BUDECO and New Plan International as the implementing agency, the activity aimed to empower and educate youths on their role in implementing the Bukedi Strategic Plan for Accelerated Wealth Creation.
      Through innovative mobilization via football competitions and cultural galas, the activity reached over 31,000 youths. Sensitization sessions on the Strategic Plan and government programs were conducted before matches, with 31,400 flyers distributed. Training on the enhanced automated multi-user Kibalo tool for enterprise prioritization was provided to representative youth members on the last two days of the activity.
      The activity achieved its objectives of raising awareness and building capacity among youths, marking a significant step in increasing youth involvement in the four priority agro-enterprises and contributing to regional wealth creation. 
      `,
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event/kibalo5.jpg",
      gallery: [
        "/images/event/kibalo6.jpg",
        "/images/event/kibalo7.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Support the focus group discussion of value chain analysis of textile and leather in Uganda",
      isFeatured: true,
      slug: "textile-leather-value-chain-analysis",
      text: "Focus group discussion analyzing textile and leather value chains with over 190 participants.",
      date: "2025-10-14",
      location: "Kampala, Kabira Country Club Hotel",
      type: "Past",
      duration: "14th -18th Oct 2025",
      category: "Value Chain Analysis",
      detail: "The Focus Group Discussion (FGD) held from 14th to 18th October 2025 completed the Value Chain Analysis for Uganda’s Textile and Leather sectors. The workshop brought together over 190 participants from across the two value chains - including farmers, processors and manufacturers, traders, consumers, policymakers, and industry specialists. The FGD successfully: Finalized the mapping of the textile and leather value chains; Identified priority value addition pathways; Analyzed costs, markets, and economic potential of products; Highlighted sector-specific challenges; Proposed strategic interventions for industrialization. Key findings reveal that both sectors have high potential to contribute significantly to Uganda’s GDP through value addition, import substitution, export growth, and job creation. The textile sector showed exceptionally high value creation in pathways such as Fiber → Non-Woven Fabric → Diapers, while the textile apparel chain—especially knitted sweaters—showed strong profitability. Leather pathways (pending completion) highlighted opportunities in hides and skins processing, tannery upgrading, and leather goods manufacturing.",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event-images/Busoga-Strategic-Plan-7.jpg",
      gallery: [
        "/images/event-images/Busoga-Strategic-Plan-1.jpeg",
        "/images/event-images/Busoga-Strategic-Plan-2.jpeg",
        "/images/event-images/Busoga-Strategic-Plan-3.jpg",
        "/images/event-images/Busoga-Strategic-Plan-4.jpeg",
        "/images/event-images/Busoga-Strategic-Plan-5.jpeg",
        "/images/event-images/Busoga-Strategic-Plan-6.jpeg",
        "/images/event-images/Busoga-Strategic-Plan-7.jpg",

      ],
      title: "Support the completion of the think tank session for drafting the Busoga sub-region strategic plan for accelerated wealth creation",
      isFeatured: true,
      advertiseOnModal: true,
      feedback: {
        allowFeedback: true,
        type: 'url',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSczVmLUE3g-75wL3wy2hC_RspgizKiFkHPYirCyBAbMZ1RRgw/viewform?usp=publish-editor',
        showFeedback: true,
        openSuggestionFields: [3, 5],
        graphFields: {
          pieChart: [1, 2],
          linearChart: [
            {
              index: 4,
              scale: { min: 1, max: 5 }
            }
          ]
        },
        sheetId: '159K4ZLxi3GXQBYyCkIrkuxoa6Cap8QPHarSbhZDg2hU'
      },
      slug: "busoga-strategic-plan-session",
      text: "Think tank session finalizing the Busoga sub-region's strategic plan for wealth creation.",
      date: "2026-01-04",
      location: "Jinja Nile Village Hotel",
      type: "Past",
      duration: "4th to 9th Jan 2026",
      category: "Strategic Planning",
      detail: null,
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: {
        header: null,
        type: "url",
        htmlContent: null,
        pdfContent: null,
        docContent: null,
        url: 'https://docs.google.com/document/d/e/2PACX-1vQhHvNUpB5G1DNxS9vRQKpA_f4kVhgF2ZZcHy1Iu1bfBio-2YBSp8V5jx7HdkUpbQ/pub?embedded=true',
        footer: `GET INVOLVED IN THE ONLINE CONSULTATIONS<br/><br/>
                  <strong>NOTE:</strong> This strategic plan is at the consultative stage of the development process. As you wait to meet you physically, give us your feedback towards the development of the final plan by 
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSczVmLUE3g-75wL3wy2hC_RspgizKiFkHPYirCyBAbMZ1RRgw/viewform?usp=header" class="text-primary underline font-semibold">CLICKING HERE</a> 
                  to submit your question/comment.<br/><br/>
                  <strong>For more information, call:</strong> 0751206482 or 0700422202 or 0782506619 or 0775674134 or send an email to <a href="mailto:productivityaccelerationbureau@gmail.com" class="text-primary underline font-semibold">productivityaccelerationbureau@gmail.com</a>
                  `
      }
    },
    {
      image: "/images/event/kibalo1.jpg",
      gallery: [
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo15.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Report Completion of commodity value chain analysis report for Orange, Mango, Banana, and Coffee",
      isFeatured: true,
      slug: "commodity-value-chain-analysis-report",
      text: "Value chain analysis reports for Orange, Mango, Banana, and Coffee commodities.",
      date: "2025-09-08",
      location: "Kampala, Fairway Hotel",
      type: "Past",
      duration: "8th -12th Sept 2025",
      category: "Value Chain Analysis",
      detail: "The establishment of four Agro-Science, Technology and Industrial Parks has been prioritized by the NDP IV and hence the ITDT PIAP. The Productivity Acceleration Bureau  had a venture at Busitema University which was focusing on developing the park and piloting it with the Orange Fleshed Sweet Potato value added products. The venture team collected substantial data for the feasibility study. This year, PAB has targeted to have preliminary works done at the site. However, this will require proof that the University has provided land for this purpose. This activity aims at following on the land acquisition for the Eastern Agro-Science, Technology and Industrial Park at Busitema University.",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event-images/agro-parks-1.jpg",
      gallery: [
        "/images/event-images/agro-parks-1.jpg",
        "/images/event-images/agro-parks-2.jpg",
        "/images/event-images/agro-parks-3.jpg",
        "/images/event-images/agro-parks-4.jpg",
        "/images/event-images/agro-parks-5.jpg",
        "/images/event-images/agro-parks-6.jpg",
        "/images/event-images/agro-parks-7.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Land Acquisition Process For Central, Western And Northern Regional Agro-Science, Technology And Industrial Parks In Uganda",
      isFeatured: true,
      slug: "land-acquisition-agro-science-parks",
      text: "Land acquisition for Agro-Science, Technology, and Industrial Parks across central, western, and northern regions.",
      date: "2025-11-26",
      location: "Entire Country",
      type: "Upcoming",
      duration: "26th November To 6th December 2025",
      category: "Industrial Parks",
      detail: "The establishment of four Agro-Science, Technology, and Industrial Parks has been prioritized under the NDP IV and the ITDT Programme Implementation Action Plan (PIAP). This year, the Productivity Acceleration Bureau (PAB) has focused on securing land for these parks, targeting major public universities in the four regions of Uganda which are; Central, Eastern, Western and Northern. Each region will be required to provide land through one public university in a given region and a formal proof of land allocation by the University Council for this purpose. Notably, the Productivity Acceleration Bureau through STI-OP, has secured land for the Eastern Agro-Science, Technology, and Industrial Park at Busitema University, Arapai Campus. The next phase involves engaging the remaining regions of Central, Western, and Northern Uganda to initiate the land allocation process for the other three remaining Agro-science, Technology and Industrial Parks.",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event/kibalo20.jpg",
      gallery: [
        "/images/event/kibalo2.jpg",
        "/images/event/kibalo5.jpg",
        "/images/event/kibalo6.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "The Land Acquisition for the Eastern Agro Science, Technology, and Industrial Park at Busitema University, Arapai Campus",
      isFeatured: true,
      slug: "land-acquisition-busitema-university",
      text: "Land acquisition visit for Eastern Agro-Science, Technology and Industrial Park at Busitema University.",
      date: "2025-08-10",
      location: "Soroti and Busia",
      type: "Past",
      duration: "10th -17th August 2025",
      category: "Land Acquisition",
      detail: "The establishment of four Agro-Science, Technology and Industrial Parks has been prioritized by the NDP IV and hence the ITDT PIAP. The Productivity Acceleration Bureau had a venture at Busitema University which was focusing on developing the park and piloting it with the Orange Fleshed Sweet Potato value added products. The venture team collected substantial data for the feasibility study. This year, PAB has targeted to have preliminary works done at the site. However, this will require proof that the University has provided land for this purpose. This activity aims at following on the land acquisition for the Eastern Agro-Science, Technology and Industrial Park",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event/kibalo7.jpg",
      gallery: [
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",


      ],
      title: "Status Surveys on available Mass Production Agro Processing Facilities and Value Chains in Eastern Uganda",
      isFeatured: true,
      slug: "status-surveys-agro-processing-eastern-uganda",
      text: "Research survey assessing agro-processing facilities and value chains across Eastern Uganda.",
      date: "2025-09-15",
      location: "Entire Country",
      type: "Past",
      duration: "15th Sept -5th October 2025",
      category: "Surveys & Research",
      detail: "In line with this, NDP IV has prioritised Science, Technology and Innovation as one of the four pillars for its implementation through the ITDT program and PIAP. Therefore, STI-OP through the Productivity Acceleration Bureau has planned to start on the Eastern Uganda Agro Science, Technology and Industrial Park this Financial Year. However, to progress, the team has to know the productivity status of the region, especially understanding the current agroprocessing capacity and functionality of existing facilities, and commodity value chains. collect data on the available agro-processing and value addition facilities and priority agro commodities being produced in the country starting with the Eastern Region, which will later be rolled out to the other regions of Uganda. This will help in planning for the park and identifying gaps that need to be addressed to enhance productivity and value addition in the region.",
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
    {
      image: "/images/event/kibalo7.jpg",
      gallery: [
        "/images/event/kibalo8.jpg",
        "/images/event/kibalo9.jpg",
        "/images/event/kibalo10.jpg",
        "/images/event/kibalo11.jpg",
        "/images/event/kibalo12.jpg",
        "/images/event/kibalo16.jpg",
      ],
      title: "Bukedi sub regional leaders meetings aimed at communicating the progress of implementation of the Bukedi strategic plan for accelerated wealth creation from 3rd to 17th November 2025",
      isFeatured: true,
      slug: "bukedi-leaders-progress-meeting",
      text: "Leadership meetings updating regional leaders on Bukedi strategic plan implementation progress.",
      date: "2025-12-03",
      location: "Bukedi",
      type: "Past",
      duration: "3rd - 17th December 2025",
      category: "Leadership Engagement",
      detail: null,
      video: "https://www.youtube.com/embed/5P1362K5WAU?si=rfpeVXhw2xj-a2q-",
      content: null,
    },
  ];


export const footerLinks: { link: string }[] = [
  {
    link: "Medical crowdfunding",
  },
  {
    link: "Cancer Crowdfunding",
  },
  {
    link: "Transplant Crowdfunding",
  },
  {
    link: "Education Crowdfunding",
  },
  {
    link: "Child Welfare",
  },
  {
    link: "Medical Finance",
  },
  {
    link: "FAQs & Help Center",
  },
  {
    link: "Fundraiser Video",
  },
  {
    link: "Trust & Safety",
  },
  {
    link: "Plans & Pricing*",
  },
];

export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
    {
      clientImg: "/images/testimonial/client-1.jpg",
      clientName: "Michelle Anderson",
      review:
        "You can relay on our amazing features list and also our customer services will be great experience. You can relay on our amazing features.",
      post: "CEO, Theme Designer",
    },
    {
      clientImg: "/images/testimonial/client-2.jpg",
      clientName: "Michelle Anderson",
      review:
        "You can relay on our amazing features list and also our customer services will be great experience. You can relay on our amazing features.",
      post: "Managing Director, Theme Designer",
    },
  ];

export interface Resource {
  title: string;
  description: string;
  date: string;
  docUrl: string;
}

export const getResources = (): Resource[] => {
  return [
    {
      title: "A bridged Version of Bukedi Strategic Plan",
      description: "The Bukedi Strategic Plan aims to transform Bukedi sub-region into a prosperous and resilient region by 2040",
      date: "2024-08-22",
      docUrl: "/docs/bukedi-abridged.pdf"
    },
    {
      title: "Bukedi Strategic Plan Summary",
      description: "Sustainable regional growth through economic empowerment, infrastructure development, human capital development, environmental sustainability.",
      date: "2024-08-22",
      docUrl: "/docs/bukedi-summary.pdf"
    },
    {
      title: "Action Plan For BUDECO",
      description: "Action plan for BUDECO arising from the bukedi sub region breakfast meeting held on saturday 21st december 2024 at Imperial Royale Hotel, kampala",
      date: "2024-12-21",
      docUrl: "/docs/bukedi-action-plan.pdf"
    },
    {
      title: "Bukedi Strategic Plan Implementation Progress Report",
      description: "This report contains the progress for the implementation of the Bukedi Strategic plan 2024-2025",
      date: "2025-08-22",
      docUrl: "/docs/bukedi-implementation-progress.pdf"
    },
    {
      title: "Bukedi Sub-Region:Driving a Qualitative Leap Towards 2040",
      description: "By 2040, Bukedi Sub-Region will undergo a transformative change, marked by sustainable development, improved quality of life, and a thriving economy",
      date: "2025-12-15",
      docUrl: "/docs/bukedi-quantitative-leap.pdf"
    }
  ];
};