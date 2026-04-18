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
  { id: '1', japanese: 'ありがとう', romaji: 'arigatou', thai: 'ขอบคุณ', english: 'Thank you', memorizedUntil: { practice: null, memorization: null } },
  { id: '2', japanese: 'ごめん', romaji: 'gomen', thai: 'ขอโทษนะ', english: 'Sorry', memorizedUntil: { practice: null, memorization: null } },
  { id: '3', japanese: 'だいじょうぶ', romaji: 'daijoubu', thai: 'ไม่เป็นไร', english: 'It is okay', memorizedUntil: { practice: null, memorization: null } },
  { id: '4', japanese: 'おはよう', romaji: 'ohayou', thai: 'อรุณสวัสดิ์', english: 'Good morning', memorizedUntil: { practice: null, memorization: null } },
  { id: '5', japanese: 'おやすみ', romaji: 'oyasumi', thai: 'ราตรีสวัสดิ์', english: 'Good night', memorizedUntil: { practice: null, memorization: null } },
  { id: '6', japanese: 'おつかれ ー', romaji: 'otsukaree', thai: 'เหนื่อยมาเยอะเลยนะ', english: 'You did a lot today', memorizedUntil: { practice: null, memorization: null } },
  { id: '7', japanese: 'おもしろい', romaji: 'omoshiroi', thai: 'น่าสนใจ', english: 'Interesting', memorizedUntil: { practice: null, memorization: null } },
  { id: '8', japanese: '家族', romaji: 'kazoku', thai: 'ครอบครัว', english: 'Family', memorizedUntil: { practice: null, memorization: null } },
  { id: '9', japanese: '彼氏', romaji: 'kareshi', thai: 'แฟนหนุ่ม', english: 'Boyfriend', memorizedUntil: { practice: null, memorization: null } },
  { id: '10', japanese: '彼女', romaji: 'kanojo', thai: 'แฟนสาว', english: 'Girlfriend', memorizedUntil: { practice: null, memorization: null } },
  { id: '11', japanese: '家', romaji: 'ie', thai: 'บ้าน', english: 'Home', memorizedUntil: { practice: null, memorization: null } },
  { id: '12', japanese: '仕事', romaji: 'shigoto', thai: 'งาน', english: 'Work', memorizedUntil: { practice: null, memorization: null } },
  { id: '13', japanese: '終わった', romaji: 'owatta', thai: 'เสร็จแล้ว', english: 'Finished', memorizedUntil: { practice: null, memorization: null } },
  { id: '14', japanese: 'お願い', romaji: 'onegai', thai: 'ได้โปรด', english: 'Please', memorizedUntil: { practice: null, memorization: null } },
  { id: '15', japanese: 'すき', romaji: 'suki', thai: 'ชอบ', english: 'I like you', memorizedUntil: { practice: null, memorization: null } },
  { id: '16', japanese: '愛してる', romaji: 'aishiteru', thai: 'ฉันรักเธอ', english: 'I love you', memorizedUntil: { practice: null, memorization: null } },
  { id: '17', japanese: 'さみしい', romaji: 'samishii', thai: 'เหงา', english: 'I feel lonely', memorizedUntil: { practice: null, memorization: null } },
  { id: '18', japanese: 'かなしい', romaji: 'kanashii', thai: 'เศร้า', english: 'I feel sad', memorizedUntil: { practice: null, memorization: null } },
  { id: '19', japanese: 'つかれた', romaji: 'tsukareta', thai: 'เหนื่อยแล้ว', english: 'I am tired', memorizedUntil: { practice: null, memorization: null } },
  { id: '20', japanese: 'うれしい', romaji: 'ureshii', thai: 'ดีใจ', english: 'I am happy', memorizedUntil: { practice: null, memorization: null } },
  { id: '21', japanese: '楽しい', romaji: 'tanoshii', thai: 'สนุก', english: 'Fun', memorizedUntil: { practice: null, memorization: null } },
  { id: '22', japanese: 'いそがしい', romaji: 'isogashii', thai: 'ยุ่ง', english: 'Busy', memorizedUntil: { practice: null, memorization: null } },
  { id: '23', japanese: 'おなかすいた', romaji: 'onaka suita', thai: 'หิวแล้ว', english: 'I am hungry', memorizedUntil: { practice: null, memorization: null } },
  { id: '24', japanese: 'めんどくさい', romaji: 'mendokusai', thai: 'น่ารำคาญ', english: 'What a hassle', memorizedUntil: { practice: null, memorization: null } },
  { id: '25', japanese: '写真', romaji: 'shashin', thai: 'รูปถ่าย', english: 'Photo', memorizedUntil: { practice: null, memorization: null } },
  { id: '26', japanese: 'ねむい', romaji: 'nemui', thai: 'ง่วง', english: 'Sleepy', memorizedUntil: { practice: null, memorization: null } },
  { id: '27', japanese: 'ねる', romaji: 'neru', thai: 'นอน', english: 'Sleep', memorizedUntil: { practice: null, memorization: null } },
  { id: '28', japanese: 'うん', romaji: 'un', thai: 'อือ', english: 'Yeah', memorizedUntil: { practice: null, memorization: null } },
  { id: '29', japanese: 'ううん', romaji: 'uun', thai: 'ไม่ใช่', english: 'Nope', memorizedUntil: { practice: null, memorization: null } },
  { id: '30', japanese: 'まじで', romaji: 'majide', thai: 'จริงเหรอ', english: 'Seriously', memorizedUntil: { practice: null, memorization: null } },
  { id: '31', japanese: 'やばい', romaji: 'yabai', thai: 'แย่แล้ว หรือ สุดยอด', english: 'This is bad or amazing', memorizedUntil: { practice: null, memorization: null } },
  { id: '32', japanese: 'いいよ', romaji: 'ii yo', thai: 'ได้สิ', english: 'Sure', memorizedUntil: { practice: null, memorization: null } },
  { id: '33', japanese: 'だめ', romaji: 'dame', thai: 'ไม่ได้', english: 'No good', memorizedUntil: { practice: null, memorization: null } },
  { id: '34', japanese: '会いたい', romaji: 'aitai', thai: 'อยากเจอ', english: 'I want to see you', memorizedUntil: { practice: null, memorization: null } },
  { id: '35', japanese: '気を付けてね', romaji: 'ki o tsukete ne', thai: 'ดูแลตัวเองนะ', english: 'Take care, okay', memorizedUntil: { practice: null, memorization: null } },
  { id: '36', japanese: 'すごい', romaji: 'sugoi', thai: 'สุดยอด', english: 'Amazing', memorizedUntil: { practice: null, memorization: null } },
  { id: '37', japanese: '朝', romaji: 'asa', thai: 'ตอนเช้า', english: 'Morning', memorizedUntil: { practice: null, memorization: null } },
  { id: '38', japanese: '夜', romaji: 'yoru', thai: 'กลางคืน', english: 'Night', memorizedUntil: { practice: null, memorization: null } },
  { id: '39', japanese: '電話', romaji: 'denwa', thai: 'โทรศัพท์', english: 'Phone call', memorizedUntil: { practice: null, memorization: null } },
  { id: '40', japanese: '電車', romaji: 'densha', thai: 'รถไฟ', english: 'Train', memorizedUntil: { practice: null, memorization: null } },
  { id: '41', japanese: '大切', romaji: 'taisetsu', thai: 'สำคัญ', english: 'Important', memorizedUntil: { practice: null, memorization: null } },
  { id: '42', japanese: 'さむい', romaji: 'samui', thai: 'หนาว', english: 'Cold', memorizedUntil: { practice: null, memorization: null } },
  { id: '43', japanese: 'あつい', romaji: 'atsui', thai: 'ร้อน', english: 'Hot', memorizedUntil: { practice: null, memorization: null } },
  { id: '44', japanese: 'いいね', romaji: 'ii ne', thai: 'ดีเลย', english: 'Nice', memorizedUntil: { practice: null, memorization: null } },
  { id: '45', japanese: 'わかった', romaji: 'wakatta', thai: 'เข้าใจแล้ว', english: 'Got it', memorizedUntil: { practice: null, memorization: null } },
  { id: '46', japanese: 'なるほど', romaji: 'naruhodo', thai: 'เข้าใจเลย', english: 'I see', memorizedUntil: { practice: null, memorization: null } },
  { id: '47', japanese: 'かわいい', romaji: 'kawaii', thai: 'น่ารัก', english: 'Cute', memorizedUntil: { practice: null, memorization: null } },
  { id: '48', japanese: '日本語', romaji: 'nihongo', thai: 'ภาษาญี่ปุ่น', english: 'Japanese language', memorizedUntil: { practice: null, memorization: null } },
  { id: '49', japanese: 'タイ人', romaji: 'taijin', thai: 'คนไทย', english: 'Thai person', memorizedUntil: { practice: null, memorization: null } },
  { id: '50', japanese: '食べる', romaji: 'taberu', thai: 'กิน', english: 'Eat', memorizedUntil: { practice: null, memorization: null } },
  { id: '51', japanese: 'ごはん', romaji: 'gohan', thai: 'ข้าว / อาหาร', english: 'Rice / meal', memorizedUntil: { practice: null, memorization: null } },
  { id: '52', japanese: '飲む', romaji: 'nomu', thai: 'ดื่ม', english: 'Drink', memorizedUntil: { practice: null, memorization: null } },
  { id: '53', japanese: '水', romaji: 'mizu', thai: 'น้ำ', english: 'Water', memorizedUntil: { practice: null, memorization: null } },
  { id: '54', japanese: '今', romaji: 'ima', thai: 'ตอนนี้', english: 'Now', memorizedUntil: { practice: null, memorization: null } },
  { id: '55', japanese: '行く', romaji: 'iku', thai: 'ไป', english: 'Go', memorizedUntil: { practice: null, memorization: null } },
  { id: '56', japanese: '今日', romaji: 'kyou', thai: 'วันนี้', english: 'Today', memorizedUntil: { practice: null, memorization: null } },
  { id: '57', japanese: '明日', romaji: 'ashita', thai: 'พรุ่งนี้', english: 'Tomorrow', memorizedUntil: { practice: null, memorization: null } },
  { id: '58', japanese: '昨日', romaji: 'kinou', thai: 'เมื่อวาน', english: 'Yesterday', memorizedUntil: { practice: null, memorization: null } },
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
