import CourseReviewSingleSection from "../../../../components/course-review/CourseReviewSingleSection";

const reviewsPositive = [
  {
    id: 1,
    name: "Олена Коваль",
    text: "Один з найкращих курсів, які я проходила! Матеріал охоплює всі важливі теми, є реальні проєкти та приклади з практики. Дуже рекомендую всім, хто хоче вивчити Python з нуля.",
  },
  {
    id: 2,
    name: "Максим Бондаренко",
    text: "Викладач пояснює надзвичайно чітко і зрозуміло. Кожна тема розкривається крок за кроком, нічого зайвого. Після курсу я вже написав свій перший проєкт.",
  },
  {
    id: 3,
    name: "Sofia Marchenko",
    text: "Excellent course! The content is deep and well-structured, explanations are crystal clear with many real-world examples. The pace is perfect for beginners.",
  },
  {
    id: 4,
    name: "Дмитро Савченко",
    text: "Чудовий баланс між теорією і практикою. Темп ідеальний — не поспішаєш, але й не нудьгуєш. Завдання цікаві та поступово ускладнюються.",
  },
  {
    id: 5,
    name: "Anna Petrenko",
    text: "The instructor is incredibly knowledgeable and explains every concept with patience. Highly recommend to anyone serious about learning programming.",
  },
  {
    id: 6,
    name: "Ірина Мельник",
    text: "Структура курсу бездоганна — кожен модуль логічно продовжує попередній. Пояснення зрозумілі навіть без попереднього досвіду.",
  },
  {
    id: 7,
    name: "Олексій Ткаченко",
    text: "Матеріал курсу актуальний і глибокий. Викладач відповідає на всі питання і допомагає розібратися навіть у складних темах.",
  },
  {
    id: 8,
    name: "Natalia Boyko",
    text: "Excellent material, very clear teaching, and well-balanced difficulty. Every lecture is packed with useful information without being overwhelming.",
  },
  {
    id: 9,
    name: "Василь Кравченко",
    text: "Неймовірно корисний курс! Всі теми розкриті детально, практичних завдань достатньо, і вони дійсно закріплюють знання. Темп і складність підібрані ідеально.",
  },
  {
    id: 10,
    name: "Катерина Лисенко",
    text: "Я вже пройшла багато курсів, але цей — окремий рівень якості. Матеріал глибокий, викладач захоплює з першої лекції. Дякую за такий чудовий контент!",
  },
  {
    id: 11,
    name: "Ivan Shevchenko",
    text: "This course exceeded all my expectations. Clear explanations, great examples, and the difficulty curve is just right. Best investment in my education.",
  },
  {
    id: 12,
    name: "Тетяна Гриценко",
    text: "Відмінний курс для початківців і середнього рівня. Викладач говорить чітко, матеріал актуальний, завдання реальні та корисні.",
  },
];

const reviewsNegative = [
  {
    id: 1,
    name: "Андрій Коломієць",
    text: "Жахливий курс. Матеріал поверхневий, скопійований з інтернету без жодного пояснення. Витратив гроші і час дарма. Категорично не рекомендую.",
  },
  {
    id: 2,
    name: "Марина Захаренко",
    text: "Викладач читає по слайдах монотонним голосом і не може відповісти на жодне запитання студентів. Пояснення незрозумілі та заплутані.",
  },
  {
    id: 3,
    name: "Sergiy Bondar",
    text: "Terrible course. The content is outdated by at least 5 years, the explanations are confusing and the instructor clearly doesn't understand the questions students ask.",
  },
  {
    id: 4,
    name: "Юлія Назаренко",
    text: "Темп курсу неможливо витримати. За один тиждень стільки завдань, що нереально встигнути. Матеріал перескакує без жодної логіки.",
  },
  {
    id: 5,
    name: "Олег Чумаченко",
    text: "Контент курсу застарілий і не відповідає опису. Замість реальних проєктів — нудні теоретичні лекції без практики. Дуже розчарований покупкою.",
  },
  {
    id: 6,
    name: "Vika Rudenko",
    text: "This is by far the worst course I have ever taken. Poorly structured, confusing explanations, and an overwhelming workload with no support. Avoid at all costs.",
  },
  {
    id: 7,
    name: "Роман Луценко",
    text: "Повне розчарування. Матеріал незрозумілий, пояснення відсутні, а складність стрибає від нуля до неможливого без жодних сходинок.",
  },
  {
    id: 8,
    name: "Ніна Костенко",
    text: "Курс абсолютно не відповідає рівню початківців. Темп шалений, матеріал подається хаотично, а завдання незрозумілі. Після другого тижня кинула.",
  },
  {
    id: 9,
    name: "Pavlo Moroz",
    text: "I wasted my money on this. The instructor rushes through every topic, never provides examples, and the assignments are poorly explained.",
  },
  {
    id: 10,
    name: "Світлана Дорошенко",
    text: "Жодної структури, жодної логіки. Теми міняються хаотично, викладач незрозуміло пояснює навіть базові речі. Шкодую про покупку.",
  },
  {
    id: 11,
    name: "Ігор Момот",
    text: "Матеріал нецікавий і застарілий. Немає практичних прикладів, лише суха теорія. Темп занадто швидкий, встигнути нереально.",
  },
  {
    id: 12,
    name: "Alina Koval",
    text: "Very disappointing. Poor content quality, unclear explanations, and way too much workload for the amount of value provided. Would not recommend.",
  },
];

const reviewsMixed = [
  {
    id: 1,
    name: "Денис Пилипенко",
    text: "Матеріал непоганий, але викладач пояснює надто швидко. Якщо маєш базу — підійде, якщо новачок — буде важко.",
  },
  {
    id: 2,
    name: "Kristina Vovk",
    text: "The content is solid and well-researched, but the explanations are sometimes confusing. I had to rewatch many lectures multiple times.",
  },
  {
    id: 3,
    name: "Богдан Гаврилюк",
    text: "Чудовий контент і актуальні теми, але темп курсу надто швидкий. Хотілось би більше часу на засвоєння кожного модуля.",
  },
  {
    id: 4,
    name: "Людмила Павленко",
    text: "Курс непоганий у цілому. Матеріал цікавий, але деякі теми пояснені поверхово. Завдань достатньо, хоча дедлайни дуже жорсткі.",
  },
  {
    id: 5,
    name: "Artem Fedorov",
    text: "Good course for intermediate learners. Content is comprehensive, but the instructor's explanations can be vague at times. Difficulty is manageable.",
  },
  {
    id: 6,
    name: "Ганна Яценко",
    text: "Перша половина курсу — відмінна, зрозуміла і добре структурована. Друга половина — хаотична і занадто складна без належного пояснення.",
  },
  {
    id: 7,
    name: "Serhii Karpenko",
    text: "Mixed feelings. The material itself is great and up-to-date, but the teaching style is dry and monotone. Hard to stay focused.",
  },
  {
    id: 8,
    name: "Валентина Остапенко",
    text: "Непоганий курс для тих, хто вже має досвід. Для початківців — занадто складно без попередньої підготовки. Пояснення могли бути чіткіші.",
  },
  {
    id: 9,
    name: "Микола Романенко",
    text: "Контент якісний і глибокий, що мені дуже сподобалось. Але навантаження величезне — доводилось витрачати вдвічі більше часу, ніж заявлено.",
  },
  {
    id: 10,
    name: "Julia Savchenko",
    text: "Decent course overall. Some lectures are excellent, others feel rushed. The assignments are useful but could use better instructions.",
  },
  {
    id: 11,
    name: "Олена Тимошенко",
    text: "Матеріал актуальний і корисний. Викладач іноді пояснює нечітко, але в цілому курс варто пройти, якщо готовий докласти зусиль.",
  },
  {
    id: 12,
    name: "Vadim Litvinenko",
    text: "Some parts of the course are fantastic — clear, practical, well-paced. Other parts feel like the instructor lost interest. Overall — worth it with reservations.",
  },
  {
    id: 13,
    name: "Тарас Кириленко",
    text: "Добрий курс із цікавим матеріалом, але надто щільний графік. Якби темп був повільніший і пояснення детальніші — було б ідеально.",
  },
];

const CourseReviewSinglePage = ({ params }) => {
  const { id } = params;
  return (
    <>
      <CourseReviewSingleSection id={id} reviews={reviewsMixed} />
    </>
  );
};

export default CourseReviewSinglePage;
