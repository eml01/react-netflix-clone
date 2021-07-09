//DEPENDENCIES
import React from 'react';

//PAGES
//COMPONENTS
import Question from './faq/Question';
import Newsletter from './Newsletter';

//ASSETS

const QUESTIONS = [
  {
    title: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    title: 'What is Netflix?',
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    title: 'How much does Netflix cost?',
    answer:
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 7,99 € to 15,99 € a month. No extra costs, no contracts.',
  },
  {
    title: 'Where can I watch?',
    answer:
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    title: 'How do I cancel?',
    answer:
      'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    title: 'Is Netflix good for kids?',
    answer:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
  },
];

const FAQ = () => {
  return (
    <div className="text-white py-8 border-t-8 border-gray-800">
      <div className="w-7/12 mx-auto">
        <h1 className="font-bold text-4xl my-8 text-center">
          Frequently Asked Questions
        </h1>
        {QUESTIONS.map((question) => (
          <Question question={question} />
        ))}
        <div className="my-10">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default FAQ;