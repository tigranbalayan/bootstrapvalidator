(function($) {
    /**
     * Armenian language package
     * Translated by @tigranbalayan
     */
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
        base64: {
            'default': 'Մուտքագրեք ճիշտ base64 տեքստ'
        },
        between: {
            'default': 'Մուտքագրեք %s - %s միջակայքից որևէ արժեք',
            notInclusive: 'Մուտքագրեք %s - %s միջակայքից որևէ արժեք'
        },
        callback: {
            'default': 'Մուտքագրեք ճիշտ արժեք'
        },
        choice: {
            'default': 'Մուտքագրեք ճիշտ արժեք',
            less: 'Ընտրեք առնվազն %s տարբերակ',
            more: 'Ընտրեք առավելագույնը %s տարբերակ',
            between: 'Ընտրեք %s-%s տարբերակ'
        },
        color: {
            'default': 'Մուտքագրեք ճիշտ գույն'
        },
        creditCard: {
            'default': 'Մուտքագրեք ճիշտ վարկային քարտի համար'
        },
        cusip: {
            'default': 'Մուտքագրեք ճիշտ CUSIP համար'
        },
        cvv: {
            'default': 'Մուտքագրեք ճիշտ CVV համար'
        },
        date: {
            'default': 'Մուտքագրեք ճիշտ ամսաթիվ',
            min: 'Մուտքագրեք ամսաթիվ %s-ից հետո',
            max: 'Մուտքագրեք ամսաթիվ մինչև %s',
            range: 'Մուտքագրեք ամսաթիվ %s - %s միջակայքից'
        },
        different: {
            'default': 'Մուտքագրեք տարբերվող արժեք'
        },
        digits: {
            'default': 'Մուտքագրեք միայն թվանշաններ'
        },
        ean: {
            'default': 'Մուտքագրեք ճիշտ EAN համար'
        },
        emailAddress: {
            'default': 'Մուտքագրեք ճիշտ էլ. փոստի հասցե'
        },
        file: {
            'default': 'Ընտրեք ճիշտ ֆայլ'
        },
        greaterThan: {
            'default': 'Մուտքագրեք %s-ից մեծ կամ հավասար արժեք',
            notInclusive: 'Մուտքագրեք %s-ից մեծ արժեք'
        },
        grid: {
            'default': 'Մուտքագրեք ճիշտ GRId համար'
        },
        hex: {
            'default': 'Մուտքագրեք ճիշտ տասնվեցերորդական թիվ'
        },
        hexColor: {
            'default': 'Մուտքագրեք գույնի ճիշտ տասնվեցերորդական համար'
        },
        iban: {
            'default': 'Մուտքագրեք ճիշտ IBAN համար',
            countryNotSupported: '%s երկրի կոդը չի սպասարկվում',
            country: 'Մուտքագրեք ճիշտ IBAN համար %s-ում',
            countries: {
                AD: 'Անդորրայի',
                AE: 'Միացյալ Արաբական Էմիրությունների',
                AL: 'Ալբանյայի',
                AO: 'Անգոլայի',
                AT: 'Ավստրիայի',
                AZ: 'Ադրբեջանի',
                BA: 'Բոսնիայի և Հերցեգովիանյի',
                BE: 'Բելգիայի',
                BF: 'Բուրկինա Ֆասոյի',
                BG: 'Բուլղարիայի',
                BH: 'Բահրեյնի',
                BI: 'Բուրունդիի',
                BJ: 'Բենինի',
                BR: 'Բրազիլիայի',
                CH: 'Շվեյցարիայի',
                CI: 'Կոտ դ\'Իվուարի',
                CM: 'Կամերունի',
                CR: 'Կոստա-Ռիկայի',
                CV: 'Կաբո-Վերդեի',
                CY: 'Կիպրոսի',
                CZ: 'Չեխիայի',
                DE: 'Գերմանիայի',
                DK: 'Դանիայի',
                DO: 'Դոմինիկյան Հանրապետության',
                DZ: 'Ալժիրի',
                EE: 'Էստոնիայի',
                ES: 'Իսպանիայի',
                FI: 'Ֆինլանդիայի',
                FO: 'Ֆարերյան կղզիների',
                FR: 'Ֆրանսիայի',
                GB: 'Մեծ Բրիտանիայի',
                GE: 'Վրաստանի',
                GI: 'Ջիբլարթարի',
                GL: 'Գրենլանդիայի',
                GR: 'Հունաստանի',
                GT: 'Գվատեմալայի',
                HR: 'Խորվատիայի',
                HU: 'Հունգարիայի',
                IE: 'Իռլանդիայի',
                IL: 'Իսրայելի',
                IR: 'Իրանի',
                IS: 'Իսլանդիայի',
                IT: 'Իտալիայի',
                JO: 'Հորդանանի',
                KW: 'Քուվեյթի',
                KZ: 'Ղազախստանի',
                LB: 'Լիբանանի',
                LI: 'Լիխտենշտեյնի',
                LT: 'Լիտվայի',
                LU: 'Լյուքսեմբուրգի',
                LV: 'Լատվիայի',
                MC: 'Մոնակոյի',
                MD: 'Մոլդովիայի',
                ME: 'Մոնտենեգրոյի',
                MG: 'Մադագասկարի',
                MK: 'Մակեդոնիայի',
                ML: 'Մալիի',
                MR: 'Մավրիտանիայի',
                MT: 'Մալթայի',
                MU: 'Մավրիկիոսի',
                MZ: 'Մոզամբիկի',
                NL: 'Նիդերլանդների',
                NO: 'Նորվեգիայի',
                PK: 'Պակիստանի',
                PL: 'Լեհաստանի',
                PS: 'Պաղեստինի',
                PT: 'Պորտուգալիայի',
                QA: 'Քաթարի',
                RO: 'Ռումինիայի',
                RS: 'Սերբիայի',
                SA: 'Սաուդյան Արաբիայի',
                SE: 'Շվեդիայի',
                SI: 'Սլովենիայի',
                SK: 'Սլովակիայի',
                SM: 'Սան-Մարինոյի',
                SN: 'Սենեգալի',
                TN: 'Թունիսի',
                TR: 'Թուքիայի',
                VG: 'Բրիտանական Վիրջինյան կղզիների'
            }
        },
        id: {
            'default': 'Մուտքագրեք ճիշտ նույնականացման համար',
            countryNotSupported: '%s երկրի կոդը չի սպասարկվում',
            country: 'Մուտքագրեք  %s-ում ճիշտ նույնականացման համար',
            countries: {
                BA: 'Բոսնիայի և Հերցեգովիանյի',
                BG: 'Բուլղարիայի',
                BR: 'Բրազիլիայի',
                CH: 'Շվեյցարիայի',
                CL: 'Չիլիի',
                CN: 'Չինաստանի',
                CZ: 'Չեխիայի',
                DK: 'Դանիայի',
                EE: 'Էստոնիայի',
                ES: 'Իսպանիայի',
                FI: 'Ֆինլանդիայի',
                HR: 'Խորվատիայի',
                IE: 'Իռլանդիայի',
                IS: 'Իսլանդիայի',
                LT: 'Լիտվայի',
                LV: 'Լատվիայի',
                ME: 'Մոնտենեգրոյի',
                MK: 'Մակեդոնիայի',
                NL: 'Նիդերլանդների',
                RO: 'Ռումինիայի',
                RS: 'Սերբիայի',
                SE: 'Շվեդիայի',
                SI: 'Սլովենիայի',
                SK: 'Սլովակիայի',
                SM: 'Սան-Մարինոյի',
                TH: 'Թայլանդի',
                ZA: 'ՀԱՀ-ի'
            }
        },
        identical: {
            'default': 'Մուտքագրեք նույն արժեքը'
        },
        imei: {
            'default': 'Մուտքագրեք ճիշտ IMEI համար'
        },
        imo: {
            'default': 'Մուտքագրեք ճիշտ IMO համար'
        },
        integer: {
            'default': 'Մուտքագրեք ամբողջ թիվ'
        },
        ip: {
            'default': 'Մուտքագրեք ճիշտ IP հասցե',
            ipv4: 'Մուտքագրեք ճիշտ IPv4 հասցե',
            ipv6: 'Մուտքագրեք ճիշտ IPv6 հասցե'
        },
        isbn: {
            'default': 'Մուտքագրեք ճիշտ ISBN համար'
        },
        isin: {
            'default': 'Մուտքագրեք ճիշտ ISIN համար'
        },
        ismn: {
            'default': 'Մուտքագրեք ճիշտ ISMN համար'
        },
        issn: {
            'default': 'Մուտքագրեք ճիշտ ISSN համար'
        },
        lessThan: {
            'default': 'Մուտքագրեք %s-ից փոքր կամ հավասար արժեք',
            notInclusive: 'Մուտքագրեք %s-ից փոքր արժեք'
        },
        mac: {
            'default': 'Մուտքագրեք ճիշտ MAC հասցե'
        },
        meid: {
            'default': 'Մուտքագրեք ճիշտ MEID համար'
        },
        notEmpty: {
            'default': 'Դաշտի լրացումը պարտադիր է'
        },
        numeric: {
            'default': 'Մուտքագրեք իրական թիվ'
        },
        phone: {
            'default': 'Մուտքագրեք ճիշտ հեռախոսահամար',
            countryNotSupported: '%s երկրի կոդը չի սպասարկվում',
            country: 'Մուտքագրեք %s-ում ճիշտ հեռախոսահամար',
            countries: {
                BR: 'Բրազիլիայի',
                CN: 'Չինաստանի',
                CZ: 'Չեխիայի',
                DE: 'Գերմանիայի',
                DK: 'Դանիայի',
                ES: 'Իսպանիայի',
                FR: 'Ֆրանսիայի',
                GB: 'Մեծ Բրիտանիայի',
                MA: 'Մարրոկոյի',
                PK: 'Պակիստանի',
                RO: 'Ռումինիայի',
                RU: 'Ռուսաստանի',
                SK: 'Սլովակիայի',
                TH: 'Թայլանդի',
                US: 'ԱՄՆ-ի',
                VE: 'Վենեսուելլայի'
            }
        },
        regexp: {
            'default': 'Մուտքագրեք կաղապարին համապատասխանող արժեք'
        },
        remote: {
            'default': 'Մուտքագրեք ճիշտ արժեք'
        },
        rtn: {
            'default': 'Մուտքագրեք ճիշտ RTN համար'
        },
        sedol: {
            'default': 'Մուտքագրեք ճիշտ SEDOL համար'
        },
        siren: {
            'default': 'Մուտքագրեք ճիշտ SIREN համար'
        },
        siret: {
            'default': 'Մուտքագրեք ճիշտ SIRET համար'
        },
        step: {
            'default': 'Մուտքագրեք ճիշտ %s քայլ'
        },
        stringCase: {
            'default': 'Խնդրում ենք մուտքագրեք միայն փոքրատառեր',
            upper: 'Խնդրում ենք մուտքագրեք միայն մեծատառեր'
        },
        stringLength: {
            'default': 'Մուտքագրեք թույլատրելի երկարությամբ արժեք',
            less: 'Մուտքագրեք առավելագույնը %s նիշ',
            more: 'Մուտքագրեք առնվազն %s նիշ',
            between: 'Մուտքագրեք նիշեր %s-ի և %s միջակայքից'
        },
        uri: {
            'default': 'Մուտքագրեք ճիշտ URI'
        },
        uuid: {
            'default': 'Մուտքագրեք ճիշտ UUID համար',
            version: 'Մուտքագրեք %s տարբերակ ճիշտ UUID համար'
        },
        vat: {
            'default': 'Մուտքագրեք ճիշտ INN Համար',
            countryNotSupported: '%s երկրի կոդը չի սպասարկվում',
            country: 'Մուտքագրեք %s ճիշտ INN (VAT) համար',
            countries: {
                AT: 'Ավստրիայի',
                BE: 'Բելգիայի',
                BG: 'Բուլղարիայի',
                BR: 'Բրազիլիայի',
                CH: 'Շվեյցարիայի',
                CY: 'Կիպրոսի',
                CZ: 'Չեխիայի',
                DE: 'Գերմանիայի',
                DK: 'Դանիայի',
                EE: 'Էստոնիայի',
                ES: 'Իսպանիայի',
                FI: 'Ֆինլանդիայի',
                FR: 'Ֆրանսիայի',
                GB: 'Մեծ Բրիտանիայի',
                GR: 'Հունաստանի',
                EL: 'Հունաստանի',
                HU: 'Հունգարիայի',
                HR: 'Խորվատիայի',
                IE: 'Իռլանդիայի',
                IS: 'Իսլանդիայի',
                IT: 'Իտալիայի',
                LT: 'Լիտվայի',
                LU: 'Լյուքսեմբուրգի',
                LV: 'Լատվիայի',
                MT: 'Մալթայի',
                NL: 'Նիդերլանդների',
                NO: 'Նորվեգիայի',
                PL: 'Լեհաստանի',
                PT: 'Պորտուգալիայի',
                RO: 'Ռումինիայի',
                RU: 'Ռուսաստանի',
                RS: 'Սերբիայի',
                SE: 'Շվեդիայի',
                SI: 'Սլովենիայի',
                SK: 'Սլովակիայի',
                VE: 'Վենեսուելլայի',
                ZA: 'ՀԱՀ-ի'
            }
        },
        vin: {
            'default': 'Մուտքագրեք ճիշտ VIN համար'
        },
        zipCode: {
            'default': 'Մուտքագրեք ճիշտ փոստային ինդեքս',
            countryNotSupported: '%s երկրի կոդը չի սպասարկվում',
            country: 'Խնդրում ենք %s-ում Մուտքագրեք ճիշտ փոստային ինդեքս',
            countries: {
                AT: 'Ավստրիայի',
                BR: 'Բրազիլիայի',
                CA: 'Կանադայի',
                CH: 'Շվեյցարիայի',
                CZ: 'Չեխիայի',
                DE: 'Գերմանիայի',
                DK: 'Դանիայի',
                FR: 'Ֆրանսիայի',
                GB: 'Մեծ Բրիտանիայի',
                IE: 'Իռլանդիայի',
                IT: 'Իտալիայի',
                MA: 'Մարրոկոյի',
                NL: 'Նիդերլանդների',
                PT: 'Պորտուգալիայի',
                RO: 'Ռումինիայի',
                RU: 'Ռուսաստանի',
                SE: 'Շվեդիայի',
                SG: 'Սինգապուր-ի',
                SK: 'Սլովակիայի',
                US: 'ԱՄՆ-ի'
            }
        }
    });
}(window.jQuery));
