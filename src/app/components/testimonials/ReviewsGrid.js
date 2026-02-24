import ReviewCard from "./ReviewCard"

const reviews = [
    { name: "Mary Lopez", date: "December 23, 2024", rating: 5, text: "Mary Lopez gives Dental Clinics of Texas 5 stars rating" },
    { name: "Frida", date: "December 23, 2024", rating: 5, text: "Frida gives Dental Clinics of Texas 5 stars rating" },
    { name: "Consuelo Luna", date: "December 16, 2024", rating: 5, text: "Consuelo Luna gives Dental Clinics of Texas 5 stars rating" },
    { name: "Lilly Villatoro", date: "December 16, 2024", rating: 5, text: "Great people good service the Dental assistant that assisted us was great as well Arham definitely recommend" },
    { name: "Kimberly Delancy", date: "December 09, 2024", rating: 5, text: "They made a scary process so easy. Couldnt recommend anyone better. Dr.Gill did amazing" },
    { name: "Sandra Jaimes", date: "December 06, 2024", rating: 5, text: "I decided to do a filling procedure for cavities on my 3 yr old, instead of having to put her under anesthesia to get it fixed. The whole process went smoothly and her teeth look beautiful! I had no worries because I knew my daughter was in good hands! (:" },
    { name: "Hong Lam", date: "December 06, 2024", rating: 5, text: "Great dental office! Staffs are friendly and helpful. Especially wonderful Doctor Langha with his special filling skill. Thanks!" },
    { name: "Jennifer Underwood", date: "December 06, 2024", rating: 5, text: "Thos offica and staff is amazing! My 6 year old daughter was not nervous at all. She even had to get a shot to be numbed up for a crown! She was smiling when we left. They are so great with the kids! Highly recommended!" },
    { name: "Angela Rivera", date: "December 06, 2024", rating: 5, text: "Everything went good. Explained everything well." },
    { name: "Uyên Tran", date: "December 06, 2024", rating: 5, text: "Good service and very clever Doctors" },
    { name: "kim Madrid", date: "December 06, 2024", rating: 5, text: "Muy buen servicio, el personal muy amable,el doctor hizo muy buen trabajo, estoy muy agradecido con todos por su excelente trabajo." },
    { name: "Mr.Bankole Oresanya", date: "December 06, 2024", rating: 5, text: "Great place for your toddlers, just had my daughter visit and she loved it! Nice and very friendly..totally recommend 😎 …thanks for the ballon!! …" },
    { name: "Ken Villan", date: "December 06, 2024", rating: 5, text: "Ken Villan gives Dental Clinics of Texas 5 stars rating" },
    { name: "Saleh Lewis", date: "December 06, 2024", rating: 5, text: "Everyone is super nice and very gentle with the kids . Also booking appointments are always easy ." },
    { name: "kanisha bishop", date: "December 06, 2024", rating: 5, text: "The best dentist around, Took great care of my children and offers all the best services around.. We are lifetime customers" },
    { name: "JoAnn Hessemer", date: "November 06, 2024", rating: 5, text: "The dental clinics of Texas have great doctors and staff .. my kids love them here and have been going here 10 yrs .." },
    { name: "mercy ibenu", date: "November 06, 2024", rating: 5, text: "mercy ibenu gives Dental Clinics of Texas 5 stars rating" },
    { name: "Tuboris Trotter-Jennnings", date: "November 06, 2024", rating: 5, text: "They have a great staff that are very accommodating. I was late for my son’s appointment and they still squeezed me in. Dr. Motekallum was amazing. She made my son comfortable and explained every step to him. Best dentist visit I’ve experienced. !!!!!" },
    { name: "Betty Echeverria", date: "November 06, 2024", rating: 5, text: "Needed a cap replaced. Efficient process, friendly staff. Happy with outcome." },
    { name: "Raymond Rusher", date: "November 06, 2024", rating: 5, text: "Nice people nice place very good dentist mr langha" },
    { name: "Ann Tran", date: "November 06, 2024", rating: 5, text: "Shout out to your team! Thanks so much for what you have done. My little 4 years old feel happy about that. No pain, no crying, just happy. Definitely I’ll take him back for the future." },
    { name: "YIQIAN LI", date: "November 06, 2024", rating: 5, text: "I had my son here for a filling! The staff and doctor are super nice and get the work done professionally and properly! Would highly recommend it if you are looking for dentist for your kids" },
    { name: "Skiler", date: "November 06, 2024", rating: 5, text: "My son was treated here and everything was awesome" },
    { name: "alaaeddin altork", date: "November 06, 2024", rating: 5, text: "It was a really great visit and what I liked the most was the new way the doctor used to treat my sons teeth. He treated my son without putting him to sleep and also my son did not feel any pain and was happy all the time." },
    { name: "Maenesha Gatewood", date: "November 06, 2024", rating: 5, text: "Great service, comfortable and educational. Dr. Langha was amazing with my toddler and gave him positive affirmations throughout his service. Dental assistant Roselyn was amazing as well. She was so nice and reassuring. She explained the procedure exactly as it would be performed. 10/10 recommend!" },
    { name: "Michael Wilkerson", date: "November 06, 2024", rating: 5, text: "As a parent of an Autistic child my first concern was his safety and whether or not he will go through the Procedure, and I must say My wife and I are Very pleased with how they handled him with Care and the attention they gave him the procedure went by smoothly and we are very pleased with the Staff." },
    { name: "Mariana Solalinde", date: "November 06, 2024", rating: 5, text: "Had a great experience with doctor Langha. My daughter usually freaks out at any other dentist but did great with him! His assistant was also great!" },
    { name: "Jessi", date: "November 06, 2024", rating: 5, text: "It was a great experience my son was helped in just 2 weeks from his visit with the doctor. Doctor an staff were very kind an also explain to me step by step on my son surgery . Really recommend this office .Thank you so much." },
    { name: "Latasha Lenoir", date: "November 06, 2024", rating: 5, text: "Staff and service was wonderful" },
    { name: "Chelsey Turner", date: "November 06, 2024", rating: 5, text: "We drove two hours to visit this office for my son’s dental work, and it was well worth the drive!! The doctors and staff were absolutely amazing and were able to get everything done today to save us a trip!! Highly recommend them!!" }
  ];

export default function ReviewsGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  )
}