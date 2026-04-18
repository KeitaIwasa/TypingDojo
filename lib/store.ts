export type Phrase = {
  id: string;
  japanese: string;
  romaji: string;
  thai: string;
  english: string;
  memorizedUntil: {
    practice: number | null;
    memorization: number | null;
  };
};

const STORAGE_KEY = 'typing_dojo_phrases';

const DEFAULT_PHRASES: Phrase[] = [
  { id: '1', japanese: 'おはよう', romaji: 'ohayou', thai: 'สวัสดีตอนเช้า', english: 'Good morning', memorizedUntil: { practice: null, memorization: null } },
  { id: '2', japanese: 'おつかれさま', romaji: 'otsukaresama', thai: 'เหนื่อยมาทั้งวันเลยนะ', english: 'Good job today', memorizedUntil: { practice: null, memorization: null } },
  { id: '3', japanese: 'ありがとう', romaji: 'arigato', thai: 'ขอบคุณ', english: 'Thank you', memorizedUntil: { practice: null, memorization: null } },
  { id: '4', japanese: 'どういたしまして', romaji: 'do itashimashite', thai: 'ด้วยความยินดี', english: 'You are welcome', memorizedUntil: { practice: null, memorization: null } },
  { id: '5', japanese: 'ごめん', romaji: 'gomen', thai: 'ขอโทษนะ', english: 'Sorry', memorizedUntil: { practice: null, memorization: null } },
  { id: '6', japanese: '大丈夫', romaji: 'daijoubu', thai: 'ไม่เป็นไร', english: 'I am okay', memorizedUntil: { practice: null, memorization: null } },
  { id: '7', japanese: '今どこ', romaji: 'ima doko', thai: 'ตอนนี้อยู่ไหน', english: 'Where are you now', memorizedUntil: { practice: null, memorization: null } },
  { id: '8', japanese: 'もう着いた', romaji: 'mou tsuita', thai: 'ถึงแล้ว', english: 'I already arrived', memorizedUntil: { practice: null, memorization: null } },
  { id: '9', japanese: 'ちょっと遅れる', romaji: 'chotto okureru', thai: 'จะสายหน่อย', english: 'I will be a little late', memorizedUntil: { practice: null, memorization: null } },
  { id: '10', japanese: '了解', romaji: 'ryoukai', thai: 'รับทราบ', english: 'Got it', memorizedUntil: { practice: null, memorization: null } },
  { id: '11', japanese: '無理', romaji: 'muri', thai: 'ไม่ไหว', english: 'No way', memorizedUntil: { practice: null, memorization: null } },
  { id: '12', japanese: 'いいね', romaji: 'ii ne', thai: 'ดีเลย', english: 'Sounds good', memorizedUntil: { practice: null, memorization: null } },
  { id: '13', japanese: 'まじで', romaji: 'majide', thai: 'จริงเหรอ', english: 'Seriously', memorizedUntil: { practice: null, memorization: null } },
  { id: '14', japanese: 'ほんと', romaji: 'honto', thai: 'จริงเหรอ', english: 'Really', memorizedUntil: { practice: null, memorization: null } },
  { id: '15', japanese: 'やばい', romaji: 'yabai', thai: 'สุดยอดเลย หรือ แย่แล้ว', english: 'This is wild', memorizedUntil: { practice: null, memorization: null } },
  { id: '16', japanese: 'うれしい', romaji: 'ureshii', thai: 'ดีใจ', english: 'I am happy', memorizedUntil: { practice: null, memorization: null } },
  { id: '17', japanese: '眠い', romaji: 'nemui', thai: 'ง่วง', english: 'I am sleepy', memorizedUntil: { practice: null, memorization: null } },
  { id: '18', japanese: 'お腹すいた', romaji: 'onaka suita', thai: 'หิวแล้ว', english: 'I am hungry', memorizedUntil: { practice: null, memorization: null } },
  { id: '19', japanese: 'おいしい', romaji: 'oishii', thai: 'อร่อย', english: 'Delicious', memorizedUntil: { practice: null, memorization: null } },
  { id: '20', japanese: '行こう', romaji: 'ikou', thai: 'ไปกันเถอะ', english: 'Let us go', memorizedUntil: { practice: null, memorization: null } },
  { id: '21', japanese: '今行く', romaji: 'ima iku', thai: 'กำลังไป', english: 'I am on my way', memorizedUntil: { practice: null, memorization: null } },
  { id: '22', japanese: '後で', romaji: 'atode', thai: 'ไว้ทีหลัง', english: 'Later', memorizedUntil: { practice: null, memorization: null } },
  { id: '23', japanese: 'またね', romaji: 'mata ne', thai: 'แล้วเจอกัน', english: 'See you', memorizedUntil: { practice: null, memorization: null } },
  { id: '24', japanese: 'おやすみ', romaji: 'oyasumi', thai: 'ราตรีสวัสดิ์', english: 'Good night', memorizedUntil: { practice: null, memorization: null } },
  { id: '25', japanese: 'ただいま', romaji: 'tadaima', thai: 'กลับมาแล้ว', english: 'I am home', memorizedUntil: { practice: null, memorization: null } },
  { id: '26', japanese: 'いってきます', romaji: 'ittekimasu', thai: 'ไปก่อนนะ', english: 'I am heading out', memorizedUntil: { practice: null, memorization: null } },
  { id: '27', japanese: 'いってらっしゃい', romaji: 'itterasshai', thai: 'เดินทางดีๆนะ', english: 'Take care on your way', memorizedUntil: { practice: null, memorization: null } },
  { id: '28', japanese: '何してるの', romaji: 'nani shiteru no', thai: 'ทำอะไรอยู่', english: 'What are you doing', memorizedUntil: { practice: null, memorization: null } },
  { id: '29', japanese: '会いたい', romaji: 'aitai', thai: 'อยากเจอ', english: 'I want to see you', memorizedUntil: { practice: null, memorization: null } },
  { id: '30', japanese: '気をつけて', romaji: 'ki o tsukete', thai: 'ระวังตัวด้วย', english: 'Take care', memorizedUntil: { practice: null, memorization: null } },
  { id: '31', japanese: 'かわいい', romaji: 'kawaii', thai: 'น่ารัก', english: 'Cute', memorizedUntil: { practice: null, memorization: null } },
  { id: '32', japanese: 'すごい', romaji: 'sugoi', thai: 'สุดยอด', english: 'Amazing', memorizedUntil: { practice: null, memorization: null } },
  { id: '33', japanese: 'きれい', romaji: 'kirei', thai: 'สวย', english: 'Beautiful', memorizedUntil: { practice: null, memorization: null } },
  { id: '34', japanese: '難しい', romaji: 'muzukashii', thai: 'ยาก', english: 'Difficult', memorizedUntil: { practice: null, memorization: null } },
  { id: '35', japanese: '簡単', romaji: 'kantan', thai: 'ง่าย', english: 'Easy', memorizedUntil: { practice: null, memorization: null } },
  { id: '36', japanese: '分かった', romaji: 'wakatta', thai: 'เข้าใจแล้ว', english: 'I got it', memorizedUntil: { practice: null, memorization: null } },
  { id: '37', japanese: '分からない', romaji: 'wakaranai', thai: 'ไม่เข้าใจ', english: 'I do not understand', memorizedUntil: { practice: null, memorization: null } },
  { id: '38', japanese: 'もう一回', romaji: 'mou ikkai', thai: 'อีกครั้งหนึ่ง', english: 'One more time', memorizedUntil: { practice: null, memorization: null } },
  { id: '39', japanese: '手伝って', romaji: 'tetsudatte', thai: 'ช่วยหน่อย', english: 'Help me', memorizedUntil: { practice: null, memorization: null } },
  { id: '40', japanese: 'お願い', romaji: 'onegai', thai: 'ได้โปรด', english: 'Please', memorizedUntil: { practice: null, memorization: null } },
  { id: '41', japanese: 'いいよ', romaji: 'ii yo', thai: 'ได้สิ', english: 'Sure', memorizedUntil: { practice: null, memorization: null } },
  { id: '42', japanese: 'だめ', romaji: 'dame', thai: 'ไม่ได้', english: 'No', memorizedUntil: { practice: null, memorization: null } },
  { id: '43', japanese: '今忙しい', romaji: 'ima isogashii', thai: 'ตอนนี้ยุ่งอยู่', english: 'I am busy right now', memorizedUntil: { practice: null, memorization: null } },
  { id: '44', japanese: '後で電話する', romaji: 'atode denwa suru', thai: 'เดี๋ยวโทรหา', english: 'I will call you later', memorizedUntil: { practice: null, memorization: null } },
  { id: '45', japanese: '写真送って', romaji: 'shashin okutte', thai: 'ส่งรูปมา', english: 'Send me a photo', memorizedUntil: { practice: null, memorization: null } },
  { id: '46', japanese: 'どこで会う', romaji: 'doko de au', thai: 'เจอกันที่ไหน', english: 'Where shall we meet', memorizedUntil: { practice: null, memorization: null } },
  { id: '47', japanese: '駅にいる', romaji: 'eki ni iru', thai: 'อยู่ที่สถานี', english: 'I am at the station', memorizedUntil: { practice: null, memorization: null } },
  { id: '48', japanese: '財布忘れた', romaji: 'saifu wasureta', thai: 'ลืมกระเป๋าสตางค์', english: 'I forgot my wallet', memorizedUntil: { practice: null, memorization: null } },
  { id: '49', japanese: 'また連絡する', romaji: 'mata renraku suru', thai: 'เดี๋ยวติดต่ออีก', english: 'I will message you again', memorizedUntil: { practice: null, memorization: null } },
  { id: '50', japanese: '気にしないで', romaji: 'ki ni shinaide', thai: 'อย่าคิดมาก', english: 'Do not worry about it', memorizedUntil: { practice: null, memorization: null } },
];

const clonePhrases = (phrases: Phrase[]): Phrase[] =>
  phrases.map((phrase) => ({
    ...phrase,
    memorizedUntil: { ...phrase.memorizedUntil },
  }));

const isValidPhrase = (value: unknown): value is Phrase => {
  if (!value || typeof value !== 'object') return false;

  const phrase = value as Partial<Phrase>;

  return (
    typeof phrase.id === 'string' &&
    typeof phrase.japanese === 'string' &&
    typeof phrase.romaji === 'string' &&
    typeof phrase.thai === 'string' &&
    typeof phrase.english === 'string' &&
    !!phrase.memorizedUntil &&
    typeof phrase.memorizedUntil === 'object' &&
    ('practice' in phrase.memorizedUntil) &&
    ('memorization' in phrase.memorizedUntil)
  );
};

export const loadPhrases = (): Phrase[] => {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed.every(isValidPhrase)) {
        return clonePhrases(parsed);
      }
    } catch (error) {
      console.error('Failed to parse stored phrases', error);
    }
  }

  const defaults = clonePhrases(DEFAULT_PHRASES);
  savePhrases(defaults);
  return defaults;
};

export const savePhrases = (phrases: Phrase[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(phrases));
};

export const resetPhrasesToDefault = (): Phrase[] => {
  if (typeof window === 'undefined') return [];
  const defaults = clonePhrases(DEFAULT_PHRASES);
  savePhrases(defaults);
  return defaults;
};
