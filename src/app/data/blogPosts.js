export let BLOG_POSTS = [];
let titles = [
  "The Importance of Early Dental Visits",
  "Tips for Stress-Free Pediatric Appointments",
  "Understanding Fluoride Treatments for Kids",
  "How to Choose the Right Toothbrush for Your Child",
  "Common Pediatric Dental Emergencies and What to Do",
  "The Role of Diet in Preventing Cavities",
  "What is Hospital Dentistry?",
  "Benefits of Minimally Invasive Fillings",
  "Managing Dental Anxiety in Children",
  "The Truth About Baby Teeth",
  "Sealants: A Shield Against Cavities"
];

let categories = ["Oral Health", "Tips", "Treatments", "Prevention"];

for (let i = 0; i < 44; i++) {
  let title =
    titles[i % 11] +
    (i >= 11 ? " (Part " + (Math.floor(i / 11) + 1) + ")" : "");

 let date = new Date(
    2024,
    11 - Math.floor(i / 4),
    20 - (i % 20)
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  BLOG_POSTS.push({
    id: i + 1,
    title: title,
    date: date,
    excerpt:
      "Maintaining your child's oral health is a journey that starts early. In this post, we explore the best practices for ensuring a lifetime of healthy smiles...",
    content:
      '<p>Maintaining your child\'s oral health is a journey that starts early. Proper dental care is essential from the moment that first tooth appears. In this comprehensive guide, we\'ll walk you through everything you need to know about keeping those little smiles bright and healthy.</p>' +

      '<h3>Why Early Visits Matter</h3>' +
      '<p>The American Academy of Pediatric Dentistry recommends that a child should visit the dentist by their first birthday or within six months of their first tooth appearing. These early visits are crucial for several reasons:</p>' +

      '<ul>' +
      '<li>Establishing a "Dental Home" for your child</li>' +
      '<li>Early detection of potential issues</li>' +
      '<li>Getting your child comfortable with the dental office environment</li>' +
      '<li>Providing parents with guidance on home care and nutrition</li>' +
      '</ul>' +

      '<h3>What to Expect During the First Visit</h3>' +
      '<p>Our goal is to make the first visit as gentle and positive as possible. We typically perform a "knee-to-knee" exam where the child stays comfortably in the parent\'s lap. We check for healthy development, clean the teeth if possible, and discuss habits like thumb-sucking or pacifier use.</p>' +

      '<h3>Tips for a Successful Appointment</h3>' +
      '<p>Preparation is key! Try to schedule the appointment during a time when your child is usually well-rested and fed. Use positive language when talking about the dentist, and avoid using words that might sound scary.</p>',

    category: categories[i % 4],
    image: "https://picsum.photos/seed/blog" + (i + 1) + "/1200/800",
    author: "Dr. Glenn Banks",
    readTime: "5 min read",
  });
}