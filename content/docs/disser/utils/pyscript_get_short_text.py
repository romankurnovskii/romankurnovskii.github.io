import re
import heapq


def text_to_short():
    input_text = Element('pyscripttextarea').element.value
    num_result_sentences = Element('pyscriptsentnums').element.value
    try:
        num_result_sentences = int(num_result_sentences)
    except:
        num_result_sentences = 10
    text_output = Element('pyscriptoutput')
    text_output.clear()

    sentences = re.split(r' *[\.\?!][\'"\)\]]* *', input_text)
    clean_text = input_text.lower()
    word_tokenize = clean_text.split()

    stop_words = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]
    word2count = {}
    for word in word_tokenize:
        if word not in stop_words:
            if word not in word2count.keys():
                word2count[word] = 1
            else:
                word2count[word] += 1
    sent2score = {}
    
    for sentence in sentences:
        for word in  sentence.split():
            if word in word2count.keys():
                if len(sentence.split(' ')) < 28 and len(sentence.split(' ')) > 9:
                    if sentence not in sent2score.keys():
                        sent2score[sentence] = word2count[word]
                    else:
                        sent2score[sentence] += word2count[word]
    # взвешенная гистограмма
    for key in word2count.keys():
        word2count[key] = word2count[key] / max(word2count.values())
    
    result_sentences = heapq.nlargest(num_result_sentences, sent2score, key=sent2score.get)
    result_sentences = ". ".join(result_sentences)
    text_output.write(result_sentences, append=True)
