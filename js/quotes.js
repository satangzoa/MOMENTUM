const quotes = [
  {
    quote: '이유는 없어. 그냥해.',
    author: '-펭수',
  },
  {
    quote: '세상에 친구는 많고 지구는 넓다. 여러분이 사랑하는 사람을 만나라.',
    author: '-펭수',
  },
  {
    quote: '원래 그래 특별하면 외로운 별이되지.',
    author: '-펭수',
  },
  {
    quote: '아닙니다.화해했어요. 그래도 보기 싫은 건 똑같습니다.',
    author: '-펭수',
  },
  {
    quote:
      '처음엔 다들 힘들고 실수도 많아요. 하지만 실수와 힘듬이 꽃을 피울날이 올겁니다.',
    author: '펭수',
  },
  {
    quote: '부정적인 사람들은 도움 안된다. 긍정적인 사람들과 얘기하라.',
    author: '-펭수',
  },
  {
    quote: '자신감은 자신에게 있다. 자신을 믿고 사랑하라.',
    author: '-펭수',
  },
  {
    quote: '내가 나일 때 제일 좋은거다',
    author: '-펭수',
  },
  {
    quote: '건강하려고 운동하냐 운동하려고 건강하지.',
    author: '-펭수',
  },
  {
    quote: '뜨끈한 것을 먹어야지 마음이 편해지는 겁니다.',
    author: '-펭수',
  },

  {
    quote: '잘쉬는 게 혁신이야',
    author: '-펭수',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
