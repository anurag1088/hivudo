export interface Editor {
  id: string
  name: string
  photo: string
  niche: string
  pricePerVideo: number
  rating: number
  reviewCount: number
  location: string
  deliveryDays: number
  about: string
  skills: string[]
  portfolio: {
    title: string
    thumbnail: string
    videoUrl: string
  }[]
  reviews: {
    id: string
    clientName: string
    clientPhoto: string
    rating: number
    comment: string
    date: string
  }[]
}

export const niches = [
  "YouTube Videos",
  "Short Form / Reels",
  "Wedding Films",
  "Corporate Videos",
  "Music Videos",
  "Documentary",
  "Animation / Motion Graphics",
  "Gaming / Streaming",
  "E-commerce / Product",
  "Educational Content"
]

export const budgetRanges = [
  { label: "Under ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000 - ₹3,000", min: 1000, max: 3000 },
  { label: "₹3,000 - ₹5,000", min: 3000, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "₹10,000+", min: 10000, max: Infinity },
]

export const deliveryOptions = [
  { label: "Within 24 hours", days: 1 },
  { label: "1-3 days", days: 3 },
  { label: "3-7 days", days: 7 },
  { label: "1-2 weeks", days: 14 },
]

export const editors: Editor[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    niche: "YouTube Videos",
    pricePerVideo: 2500,
    rating: 4.9,
    reviewCount: 127,
    location: "Mumbai",
    deliveryDays: 3,
    about: "Professional video editor with 5+ years of experience specializing in YouTube content. I have worked with creators having 100K+ subscribers and understand the nuances of engaging content. My editing style focuses on maintaining viewer retention through dynamic cuts, color grading, and seamless transitions.",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Sound Design"],
    portfolio: [
      { title: "Tech Review Edit", thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Travel Vlog", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Product Showcase", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r1", clientName: "Rahul K.", clientPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Arjun delivered exactly what I needed. The edits were clean and the turnaround was faster than expected!", date: "2024-01-15" },
      { id: "r2", clientName: "Priya M.", clientPhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Amazing work! He understood my vision perfectly and added his creative touch.", date: "2024-01-10" },
    ]
  },
  {
    id: "2",
    name: "Sneha Patel",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    niche: "Short Form / Reels",
    pricePerVideo: 800,
    rating: 4.8,
    reviewCount: 89,
    location: "Bangalore",
    deliveryDays: 1,
    about: "Specializing in viral short-form content for Instagram Reels, YouTube Shorts, and TikTok. I stay updated with the latest trends and know what makes content pop on social media. Quick turnaround guaranteed!",
    skills: ["CapCut", "Premiere Pro", "Trending Effects", "Viral Hooks", "Captions"],
    portfolio: [
      { title: "Fashion Reel", thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Food Content", thumbnail: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Dance Reel", thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r3", clientName: "Ankit S.", clientPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "My reels went viral after Sneha edited them! She knows exactly what works.", date: "2024-01-18" },
    ]
  },
  {
    id: "3",
    name: "Vikram Reddy",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    niche: "Wedding Films",
    pricePerVideo: 15000,
    rating: 5.0,
    reviewCount: 56,
    location: "Hyderabad",
    deliveryDays: 14,
    about: "Cinematic wedding filmmaker with a passion for storytelling. I create emotional, beautiful wedding films that couples cherish forever. Each project receives my full attention and dedication.",
    skills: ["Cinematic Editing", "Color Science", "Audio Mixing", "Drone Footage", "Storytelling"],
    portfolio: [
      { title: "Destination Wedding", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Traditional Ceremony", thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Wedding Highlights", thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r4", clientName: "Deepa & Raj", clientPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Our wedding film was absolutely stunning! Vikram captured every emotion perfectly.", date: "2024-01-05" },
    ]
  },
  {
    id: "4",
    name: "Meera Iyer",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
    niche: "Corporate Videos",
    pricePerVideo: 5000,
    rating: 4.7,
    reviewCount: 43,
    location: "Chennai",
    deliveryDays: 5,
    about: "Corporate video specialist with experience working with Fortune 500 companies. I understand the professional tone needed for business content while keeping it engaging and modern.",
    skills: ["Premiere Pro", "Motion Graphics", "Voice Over Sync", "Branding", "Presentations"],
    portfolio: [
      { title: "Company Profile", thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Product Launch", thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Training Video", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r5", clientName: "TechCorp India", clientPhoto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Professional work delivered on time. Will definitely work with Meera again.", date: "2024-01-12" },
    ]
  },
  {
    id: "5",
    name: "Rohan Kapoor",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
    niche: "Music Videos",
    pricePerVideo: 8000,
    rating: 4.9,
    reviewCount: 71,
    location: "Delhi",
    deliveryDays: 7,
    about: "Music video editor and colorist with a unique visual style. I work closely with artists to bring their vision to life through creative editing, effects, and color grading.",
    skills: ["Color Grading", "VFX", "Beat Sync", "Creative Transitions", "4K Workflow"],
    portfolio: [
      { title: "Hip Hop MV", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Indie Music Video", thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Album Visualizer", thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r6", clientName: "IndieArtist", clientPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Rohan transformed my song into a visual masterpiece. Highly recommend!", date: "2024-01-20" },
    ]
  },
  {
    id: "6",
    name: "Ananya Das",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    niche: "Animation / Motion Graphics",
    pricePerVideo: 6000,
    rating: 4.8,
    reviewCount: 38,
    location: "Kolkata",
    deliveryDays: 7,
    about: "Motion graphics designer and animator creating eye-catching visuals. From logo animations to explainer videos, I bring static concepts to life with smooth, professional animations.",
    skills: ["After Effects", "Cinema 4D", "Blender", "2D Animation", "Character Animation"],
    portfolio: [
      { title: "Logo Animation", thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Explainer Video", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Social Media Pack", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r7", clientName: "StartupXYZ", clientPhoto: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "The animations Ananya created for our product video were incredible!", date: "2024-01-08" },
    ]
  },
  {
    id: "7",
    name: "Karthik Menon",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    niche: "Gaming / Streaming",
    pricePerVideo: 1500,
    rating: 4.6,
    reviewCount: 94,
    location: "Pune",
    deliveryDays: 2,
    about: "Gaming content editor specializing in montages, stream highlights, and esports content. I understand gaming culture and create hype edits that engage the gaming community.",
    skills: ["Jump Cuts", "Meme Edits", "Stream Highlights", "Montages", "Sound Effects"],
    portfolio: [
      { title: "Gaming Montage", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Stream Highlights", thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Esports Edit", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r8", clientName: "GamerPro99", clientPhoto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Perfect edits every time! Karthik knows exactly what the gaming audience wants.", date: "2024-01-22" },
    ]
  },
  {
    id: "8",
    name: "Pooja Singh",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face",
    niche: "E-commerce / Product",
    pricePerVideo: 3500,
    rating: 4.7,
    reviewCount: 52,
    location: "Ahmedabad",
    deliveryDays: 4,
    about: "E-commerce video specialist creating compelling product videos that convert. From unboxing to feature highlights, I create content that drives sales.",
    skills: ["Product Showcase", "360 Videos", "Lifestyle Shoots", "Amazon/Flipkart Ready", "Thumbnail Design"],
    portfolio: [
      { title: "Product Unboxing", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Fashion Lookbook", thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=225&fit=crop", videoUrl: "#" },
      { title: "Tech Review", thumbnail: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=225&fit=crop", videoUrl: "#" },
    ],
    reviews: [
      { id: "r9", clientName: "ShopEasy", clientPhoto: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face", rating: 5, comment: "Our product videos got 3x more engagement after working with Pooja!", date: "2024-01-14" },
    ]
  },
]

export function getEditorById(id: string): Editor | undefined {
  return editors.find(editor => editor.id === id)
}

export function filterEditors(
  niche?: string,
  budgetRange?: { min: number; max: number },
  deliveryDays?: number,
  searchQuery?: string
): Editor[] {
  return editors.filter(editor => {
    if (niche && editor.niche !== niche) return false
    if (budgetRange && (editor.pricePerVideo < budgetRange.min || editor.pricePerVideo > budgetRange.max)) return false
    if (deliveryDays && editor.deliveryDays > deliveryDays) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        editor.name.toLowerCase().includes(query) ||
        editor.niche.toLowerCase().includes(query) ||
        editor.skills.some(skill => skill.toLowerCase().includes(query)) ||
        editor.location.toLowerCase().includes(query)
      )
    }
    return true
  })
}
