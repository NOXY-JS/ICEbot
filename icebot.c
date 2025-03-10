/*
1
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <time.h>
#include <math.h>
#include <curl/curl.h>
#include <libwebsockets.h>
#include <pthread.h>
#include <ctype.h>
#include <libxml/HTMLparser.h>
#include <libxml/xpath.h>
#include <libxml/xpathInternals.h>

/* global */
bool kicknewstat = false, kickjoinstat = false, autoreport = false, autoskip = false, antiafk = false, antikick = false;
int antikickDelay = 1;
bool autokick = false;
char *autoguess = NULL;
bool autofarm = false, giveanswer = false, autorejoin = false, kickalljoin = false, kickonjoin = false, allcommand = false, autotips = false;
int waitforkick = 0;
int rand_magic() {
    return (int)(floor(((double)rand()/((double)RAND_MAX)) * 100000) + 1);
}
typedef void (*watch_callback)(const char *newVal, const char *oldVal);
typedef struct {
    char *value; 
    watch_callback callback;
} Watcher;
void LUNA(Watcher *w, watch_callback c) {
    w->callback = c;
}
void updateWatcher(Watcher *w, const char *newValue) {
    if ((w->value == NULL && newValue != NULL) ||
        (w->value != NULL && newValue == NULL) ||
        (w->value && newValue && strcmp(w->value, newValue) != 0)) {
        char *oldVal = w->value ? strdup(w->value) : NULL;
        free(w->value);
        w->value = strdup(newValue);
        if (w->callback) {
            w->callback(newValue, oldVal);
        }
        if(oldVal) free(oldVal);
    }
}
typedef struct {
    char ev[256];
} DatSa;
DatSa datsa;
typedef struct {
    Watcher join;
    Watcher exit;
    Watcher report;
    Watcher word1;
    Watcher word2;
    Watcher answerinput;
    Watcher rejoin;
} De;
De de_instance;
void gg(const char *e, const char *x) {
    snprintf(datsa.ev, sizeof(datsa.ev), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
}

void g(const char *e, const char *x, const char *s, const char *d, const char *a, const char *q, const char *y, const char *z, const char *m, const char *v) {
    if(strcmp(e, "exit") == 0) {
        char buffer[256];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
        updateWatcher(&de_instance.exit, buffer);
    }
    else if(strcmp(e, "join") == 0) {
        char buffer[512];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",%d]",
                 e, x, s, d, a, q, y, z, m, rand_magic());
        updateWatcher(&de_instance.join, buffer);
    }
    else if(strcmp(e, "rejoin") == 0) {
        char buffer[600];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",%d]",
                 e, x, s, d, a, q, y, z, m, v, rand_magic());
        updateWatcher(&de_instance.rejoin, buffer);
    }
    else if(strcmp(e, "report") == 0) {
        char buffer[256];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
        updateWatcher(&de_instance.report, buffer);
    }
    else if(strcmp(e, "word1") == 0) {
        char buffer[256];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
        updateWatcher(&de_instance.word1, buffer);
    }
    else if(strcmp(e, "word2") == 0) {
        char buffer[256];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
        updateWatcher(&de_instance.word2, buffer);
    }
    else if(strcmp(e, "answerinput") == 0) {
        char buffer[256];
        snprintf(buffer, sizeof(buffer), "[\"%s\",\"%s\",%d]", e, x, rand_magic());
        updateWatcher(&de_instance.answerinput, buffer);
    }
}
static struct lws_context *context = NULL;
static pthread_mutex_t ws_lock = PTHREAD_MUTEX_INITIALIZER;
typedef struct per_session_data {
    struct lws *wsi;
} per_session_data_t;
static int callback_protocol(struct lws *wsi, enum lws_callback_reasons reason,
                             void *user, void *in, size_t len)
{
    per_session_data_t *pss = (per_session_data_t *)user;
    switch (reason) {
        case LWS_CALLBACK_ESTABLISHED:
            lwsl_user("Client connected\n");
            pss->wsi = wsi;
            break;
        case LWS_CALLBACK_RECEIVE: {
            char *message = malloc(len + 1);
            if(message) {
                memcpy(message, in, len);
                message[len] = '\0';
                lwsl_user("Received: %s\n", message);
                LUNA(&de_instance.word1, 
                    (watch_callback) (^(const char *newV, const char *oldV) {
                        char sendbuf[256];
                        snprintf(sendbuf, sizeof(sendbuf), "{\"word1\":%s}", newV + 1);
                        lws_write(wsi, (unsigned char *)sendbuf, strlen(sendbuf), LWS_WRITE_TEXT);
                    }));
                LUNA(&de_instance.word2, 
                    (watch_callback) (^(const char *newV, const char *oldV) {
                        char sendbuf[256];
                        snprintf(sendbuf, sizeof(sendbuf), "{\"word2\":%s}", newV + 1);
                        lws_write(wsi, (unsigned char *)sendbuf, strlen(sendbuf), LWS_WRITE_TEXT);
                    }));
                LUNA(&de_instance.answerinput, 
                    (watch_callback) (^(const char *newV, const char *oldV) {
                        char sendbuf[256];
                        snprintf(sendbuf, sizeof(sendbuf), "{\"answerinput\":%s}", newV + 1);
                        lws_write(wsi, (unsigned char *)sendbuf, strlen(sendbuf), LWS_WRITE_TEXT);
                    }));
                time_t rawtime = time(NULL);
                struct tm *ptm = gmtime(&rawtime);
                char dd[32], dh[32];
                strftime(dd, sizeof(dd), "%Y-%m-%d", ptm);
                strftime(dh, sizeof(dh), "%H:%M:%S", ptm);
                char userbuf[64]={0}, cmdbuf[256]={0}, language[16]={0}, subject[16]={0}, viewer[64]={0};
                sscanf(message, "{\"user\":\"%[^\"]\",\"cmd\":\"%[^\"]\",\"language\":\"%[^\"]\",\"subject\":\"%[^\"]\",\"viewer\":\"%[^\"]\"}", 
                       userbuf, cmdbuf, language, subject, viewer);

                if(strchr(message, 'r') != NULL) {

                }

                if(strlen(viewer) > 0) {

                }
                if(strlen(cmdbuf) > 0) {

                    char *ff[16] = {0};
                    int ff_count = 0;
                    char *token = strtok(cmdbuf, "[\",]");
                    while(token && ff_count < 16) {
                        if(strlen(token) > 0) {
                            ff[ff_count++] = token;
                        }
                        token = strtok(NULL, "[\",]");
                    }
                    if(ff_count > 0) {
                        if(strcmp(ff[0], "join") == 0 && ff_count >= 9) {
                            g("join", ff[1], ff[2], ff[3], ff[4], ff[5], ff[6], ff[7], ff[8], "1");
                        }
                        else if(strcmp(ff[0], "report") == 0) {
                            gg("report", ff[1]);
                        }
                        else if(strcmp(ff[0], "kick") == 0) {
                            gg("kick", ff[1]);
                        }
                        else if(strcmp(ff[0], "broadcastspam") == 0) {
                            gg("broadcastspam", ff[1]);
                        }
                        else if(strcmp(ff[0], "msgspam") == 0) {
                            gg("msgspam", ff[1]);
                        }
                        else if(strcmp(ff[0], "answerspam") == 0) {
                            gg("answerspam", ff[1]);
                        }
                        else if(strcmp(ff[0], "broadcast") == 0) {
                            gg("broadcast", ff[1]);
                        }
                        else if(strcmp(ff[0], "msg") == 0) {
                            gg("msg", ff[1]);
                        }
                        else if(strcmp(ff[0], "answer") == 0) {
                            gg("answer", ff[1]);
                        }
                        else if(strcmp(ff[0], "accept1") == 0) {
                            gg("accept1", ff[1]);
                        }
                        else if(strcmp(ff[0], "accept2") == 0) {
                            gg("accept2", ff[1]);
                        }
                        else if(strcmp(ff[0], "tips") == 0) {
                            gg("tips", ff[1]);
                        }
                        else if(strcmp(ff[0], "rejoin") == 0) {
                            gg("rejoin", ff[1]);
                        }
                        else if(strcmp(ff[0], "jump") == 0) {
                            gg("jump", ff[1]);
                        }
                        else if(strcmp(ff[0], "exit") == 0) {
                            gg("exit", "");
                        }
                        else if(strcmp(ff[0], "autoreport") == 0) {
                            autoreport = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autoskip") == 0) {
                            autoskip = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "antikick") == 0) {
                            antikick = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autokick") == 0) {
                            autokick = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autofarm") == 0) {
                            autofarm = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autoguess") == 0) {
                            free(autoguess);
                            autoguess = strdup(ff[1]);
                        }
                        else if(strcmp(ff[0], "giveanswer") == 0) {
                            giveanswer = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autorejoin") == 0) {
                            autorejoin = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "kickalljoin") == 0) {
                            kickalljoin = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "kickonjoin") == 0) {
                            kickonjoin = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "allcommand") == 0) {
                            allcommand = (strcmp(ff[1],"true") == 0);
                        }
                        else if(strcmp(ff[0], "autotips") == 0) {
                            autotips = (strcmp(ff[1],"true") == 0);
                        }
                    }
                }
                free(message);
            }
            break;
        }
        default:
            break;
    }
    return 0;
}

static struct lws_protocols protocols[] = {
    {
        .name = "example-protocol",
        .callback = callback_protocol,
        .per_session_data_size = sizeof(per_session_data_t),
    },
    { NULL, NULL, 0 }
};

char randomChar(const char **a, int len) {
    int idx = rand() % len;
    return a[idx][0];
}
const char *inv[8] = {"\u17cb", "\u200f", "\u200b", "\u00ad", "\u206f", "\u200e", "\U0001d159", "\u2060"};
char *aT(const char *m, int n) {
    const char *cC;
    switch(n) {
        case 1: cC = "\u0300"; break;
        case 2: cC = "\u0301"; break;
        case 3: cC = "\u0302"; break;
        case 4: cC = "\u0303"; break;
        case 5: cC = "\u0304"; break;
        case 6: cC = "\u0305"; break;
        case 7: cC = "\u0306"; break;
        case 8: cC = "\u0307"; break;
        case 9: cC = "\u0308"; break;
        case 10: cC = "\u0309"; break;
        case 11: cC = "\u030a"; break;
        case 12: cC = "\u030b"; break;
        case 13: cC = "\u030c"; break;
        case 14: cC = "\u030d"; break;
        case 15: cC = "\u030e"; break;
        case 16: cC = "\u030f"; break;
        case 17: cC = "\u0310"; break;
        case 18: cC = "\u0311"; break;
        case 19: cC = "\u0312"; break;
        case 20: cC = "\u0313"; break;
        case 21: cC = "\u0314"; break;
        case 22: cC = "\u0315"; break;
        case 23: cC = "\u0316"; break;
        case 24: cC = "\u0317"; break;
        case 25: cC = "\u0318"; break;
        case 26: cC = "\u0319"; break;
        case 27: cC = "\u031a"; break;
        case 28: cC = "\u031b"; break;
        case 29: cC = "\u031c"; break;
        case 30: cC = "\u031d"; break;
        case 31: cC = "\u031e"; break;
        case 32: cC = "\u031f"; break;
        case 33: cC = "\u0320"; break;
        case 34: cC = "\u0321"; break;
        case 35: cC = "\u0322"; break;
        case 36: cC = "\u0323"; break;
        case 37: cC = "\u0324"; break;
        case 38: cC = "\u0325"; break;
        case 39: cC = "\u0326"; break;
        case 40: cC = "\u0327"; break;
        case 41: cC = "\u0328"; break;
        case 42: cC = "\u0329"; break;
        case 43: cC = "\u032a"; break;
        case 44: cC = "\u032b"; break;
        case 45: cC = "\u032c"; break;
        case 46: cC = "\u032d"; break;
        case 47: cC = "\u032e"; break;
        case 48: cC = "\u032f"; break;
        case 49: cC = "\u0330"; break;
        case 50: cC = "\u0331"; break;
        case 51: cC = "\u0332"; break;
        case 52: cC = "\u0333"; break;
        case 53: cC = "\u0334"; break;
        case 54: cC = "\u0335"; break;
        case 55: cC = "\u0336"; break;
        case 56: cC = "\u0337"; break;
        case 57: cC = "\u0338"; break;
        case 58: cC = "\u0339"; break;
        case 59: cC = "\u033a"; break;
        case 60: cC = "\u033b"; break;
        case 61: cC = "\u033c"; break;
        case 62: cC = "\u033d"; break;
        case 63: cC = "\u033e"; break;
        case 64: cC = "\u033f"; break;
        case 65: cC = "\u0340"; break;
        case 66: cC = "\u0341"; break;
        case 67: cC = "\u0342"; break;
        case 68: cC = "\u0343"; break;
        case 69: cC = "\u0344"; break;
        case 70: cC = "\u0345"; break;
        case 71: cC = "\u0346"; break;
        case 72: cC = "\u0347"; break;
        case 73: cC = "\u0348"; break;
        case 74: cC = "\u0349"; break;
        case 75: cC = "\u034a"; break;
        case 76: cC = "\u034b"; break;
        case 77: cC = "\u034c"; break;
        case 78: cC = "\u034d"; break;
        case 79: cC = "\u034e"; break;
        case 80: cC = "\u034f"; break;
        case 81: cC = "\u0350"; break;
        case 82: cC = "\u0351"; break;
        case 83: cC = "\u0352"; break;
        case 84: cC = "\u0353"; break;
        case 85: cC = "\u0354"; break;
        case 86: cC = "\u0355"; break;
        case 87: cC = "\u0356"; break;
        case 88: cC = "\u0357"; break;
        case 89: cC = "\u0358"; break;
        case 90: cC = "\u0359"; break;
        case 91: cC = "\u035a"; break;
        case 92: cC = "\u035b"; break;
        case 93: cC = "\u035c"; break;
        case 94: cC = "\u035d"; break;
        case 95: cC = "\u035e"; break;
        case 96: cC = "\u035f"; break;
        case 97: cC = "\u0360"; break;
        case 98: cC = "\u0361"; break;
        case 99: cC = "\u0362"; break;
        case 100: cC = "\u0363"; break;
        case 101: cC = "\u0364"; break;
        case 102: cC = "\u0365"; break;
        case 103: cC = "\u0366"; break;
        case 104: cC = "\u0367"; break;
        case 105: cC = "\u0368"; break;
        case 106: cC = "\u0369"; break;
        case 107: cC = "\u036a"; break;
        case 108: cC = "\u036b"; break;
        case 109: cC = "\u036c"; break;
        case 110: cC = "\u036d"; break;
        case 111: cC = "\u036e"; break;
        case 112: cC = "\u036f"; break;
        default: cC = ""; break;
    }

    size_t len_m = strlen(m);
    size_t newSize = len_m * (strlen(cC) + 1) + 1;
    char *nT = malloc(newSize);
    nT[0] = '\0';
    for (size_t i = 0; i < len_m; i++) {
        if(m[i] != ' ') {
            strncat(nT, &m[i], 1);
            strncat(nT, cC, strlen(cC));
        } else {
            strncat(nT, " ", 1);
        }
    }
    return nT;
}

char *rnext(const char *kelime) {
    size_t len = strlen(kelime);
    char *result = malloc(len * 3 + 1);
    result[0] = '\0';
    const char *invisibleChars[] = {"\u200B", "\u200C", "\u200D", "\u2061", "\u2062", "\u2063", "\u2064", "\u2066", "\u17b4", "\u17b5", "\u2068", "\u2069"};
    int charCount = 0;
    for (size_t i = 0; i < len; i++) {
        strncat(result, &kelime[i], 1);
        charCount++;
        if (charCount < 18 && i < len - 1) {
            int r = rand() % (sizeof(invisibleChars)/sizeof(invisibleChars[0]));
            strcat(result, invisibleChars[r]);
            charCount++;
        }
        if(charCount >= 18) break;
    }
    return result;
}
char *em(const char *p) {
    const char *iC[] = {"\uFE00", "\uFE01", "\uFE02", "\uFE03", "\uFE04", "\uFE05", "\uFE06", "\uFE07", "\uFE08", "\uFE09", "\uFE0A", "\uFE0B", "\uFE0C", "\uFE0D", "\uFE0E", "\uFE0F",
                        "\u206F","\u206E","\u200B", "\u200C", "\u200D", "\u2061", "\u2062", "\u2063", "\u2064", "\u2066", "\u17b4", "\u17b5", "\u2068", "\u2069"};
    int iC_len = 30;
    int p_len = strlen(p);
    int niC = 18 - p_len;
    char *result = strdup(p);
    for (int i = 0; i < niC; i++){
        int rP = rand() % (strlen(result)+1);
        int rC = rand() % iC_len;
        size_t newSize = strlen(result) + strlen(iC[rC]) + 1;
        char *temp = malloc(newSize);
        strncpy(temp, result, rP);
        temp[rP] = '\0';
        strcat(temp, iC[rC]);
        strcat(temp, result + rP);
        free(result);
        result = temp;
    }
    return result;
}
int gRc() {
    int eR[] = {128512, 128591, 128640, 128767, 129280, 129535};
    int numRanges = sizeof(eR)/sizeof(eR[0]);
    int c;
    bool valid = false;
    do {
        c = rand() % 2801;
        valid = true;
        for (int i = 0; i < numRanges; i++) {
            if(c >= eR[i] && c <= eR[i] + 127) {
                valid = false;
                break;
            }
        }
    } while (!valid);
    return c;
}
char *gRcs() {
    char *cs = malloc(18);
    for (int i = 0; i < 17; i++) {
        int code = gRc();
        cs[i] = (char)(code % 128);
    }
    cs[17] = '\0';
    return cs;
}

const char *etL[] = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                     "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
void shuffle(const char **a, int n) {
    for (int i = n - 1; i > 0; i--) {
        int j = rand() % (i + 1);
        const char *temp = a[i];
        ((const char **)a)[i] = a[j];
        ((const char **)a)[j] = temp;
    }
}
struct MemoryStruct {
    char *memory;
    size_t size;
};

static size_t WriteMemoryCallback(void *contents, size_t size, size_t nmemb, void *userp) {
    size_t realsize = size * nmemb;
    struct MemoryStruct *mem = (struct MemoryStruct *)userp;
    char *ptr = realloc(mem->memory, mem->size + realsize + 1);
    if(ptr == NULL)
        return 0;
    mem->memory = ptr;
    memcpy(&(mem->memory[mem->size]), contents, realsize);
    mem->size += realsize;
    mem->memory[mem->size] = '\0';
    return realsize;
}

void performCroxyproxyRequest() {
    CURL *curl;
    CURLcode res;
    curl = curl_easy_init();
    if(curl) {
        const char *url = "https://www.croxyproxy.rocks";
        struct MemoryStruct chunk;
        chunk.memory = malloc(1);
        chunk.size = 0;
        curl_easy_setopt(curl, CURLOPT_URL, url);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteMemoryCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void *)&chunk);
        res = curl_easy_perform(curl);
        if(res == CURLE_OK) {
            htmlDocPtr doc = htmlReadMemory(chunk.memory, chunk.size, NULL, NULL, HTML_PARSE_NOWARNING | HTML_PARSE_NOERROR);
            if(doc) {
                xmlChar *xpath = (xmlChar*)"//input[@type='hidden' and @id='request']";
                xmlXPathContextPtr context_xpath = xmlXPathNewContext(doc);
                xmlXPathObjectPtr result = xmlXPathEvalExpression(xpath, context_xpath);
                if(result && !xmlXPathNodeSetIsEmpty(result->nodesetval)) {
                    xmlNodePtr node = result->nodesetval->nodeTab[0];
                    xmlChar *hi = xmlGetProp(node, (const xmlChar*)"value");
                    printf("%s\n", hi);
                    char postData[512];
                    snprintf(postData, sizeof(postData), "url=example.com&proxyServerId=63&csrf=%s&demo=0&frontOrigin=https://www.croxyproxy.rocks", hi);
                    struct curl_slist *headers = NULL;
                    headers = curl_slist_append(headers, "Content-Type: application/x-www-form-urlencoded");
                    curl_easy_setopt(curl, CURLOPT_URL, "https://www.croxyproxy.rocks/requests?fso=");
                    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData);
                    curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
                    struct MemoryStruct responseChunk;
                    responseChunk.memory = malloc(1);
                    responseChunk.size = 0;
                    curl_easy_setopt(curl, CURLOPT_WRITEDATA, (void *)&responseChunk);
                    res = curl_easy_perform(curl);

if (res == CURLE_OK) {
    printf("Response Data: %s\n", responseChunk.memory);
    char *locationHeader = NULL;
    CURLcode infoRes = curl_easy_getinfo(curl, CURLINFO_EFFECTIVE_URL, &locationHeader);

    if (infoRes == CURLE_OK && locationHeader) {
        printf("Location Header: %s\n", locationHeader);
        curl_free(locationHeader);
    } else {
        fprintf(stderr, "Failed to get location header: %s\n", 
                curl_easy_strerror(infoRes));
    }
}

free(responseChunk.memory);
xmlFree(hi);
xmlXPathFreeObject(result);
                }
                xmlXPathFreeContext(context_xpath);
                xmlFreeDoc(doc);
            }
        }
        free(chunk.memory);
        curl_easy_cleanup(curl);
    }
}

/* -------------------- MAIN FUNCTION -------------------- */
int main(void) {
    srand((unsigned)time(NULL));
    de_instance.join.value = NULL; de_instance.join.callback = NULL;
    de_instance.exit.value = NULL; de_instance.exit.callback = NULL;
    de_instance.report.value = NULL; de_instance.report.callback = NULL;
    de_instance.word1.value = NULL; de_instance.word1.callback = NULL;
    de_instance.word2.value = NULL; de_instance.word2.callback = NULL;
    de_instance.answerinput.value = NULL; de_instance.answerinput.callback = NULL;
    de_instance.rejoin.value = NULL; de_instance.rejoin.callback = NULL;
    struct lws_context_creation_info info;
    memset(&info, 0, sizeof(info));
    info.port = 8081;
    info.protocols = protocols;
    context = lws_create_context(&info);
    if (context == NULL) {
        fprintf(stderr, "lws init failed\n");
        return -1;
    }
    pthread_t proxy_thread;
    pthread_create(&proxy_thread, NULL, (void*(*)(void*))performCroxyproxyRequest, NULL);
    while (1) {
        lws_service(context, 50);
    }
    lws_context_destroy(context);
    pthread_join(proxy_thread, NULL);
    return 0;
}