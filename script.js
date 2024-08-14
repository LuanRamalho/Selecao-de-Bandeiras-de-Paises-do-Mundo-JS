// script.js

const countries = {
    africa: {
        'África do Sul': 'https://flagcdn.com/za.svg',
        'Angola': 'https://flagcdn.com/ao.svg',
        'Argélia': 'https://flagcdn.com/dz.svg',
        'Benin': 'https://flagcdn.com/bj.svg',
        'Botsuana': 'https://flagcdn.com/bw.svg',
        'Burkina Faso': 'https://flagcdn.com/bf.svg',
        'Burundi': 'https://flagcdn.com/bi.svg',
        'Camarões': 'https://flagcdn.com/cm.svg',
        'Cabo Verde': 'https://flagcdn.com/cv.svg',
        'República Centro Africana': 'https://flagcdn.com/cf.svg',
        'Chade': 'https://flagcdn.com/td.svg',
        'Comoros': 'https://flagcdn.com/km.svg',
        'República do Congo': 'https://flagcdn.com/cg.svg',
        'República Democrática do Congo': 'https://flagcdn.com/cd.svg',
        'Costa do Marfim': 'https://flagcdn.com/ci.svg',
        'Djibuti': 'https://flagcdn.com/dj.svg',
        'Egito': 'https://flagcdn.com/eg.svg',
        'Eritreia': 'https://flagcdn.com/er.svg',
        'Eswatini': 'https://flagcdn.com/sz.svg',
        'Etiópia': 'https://flagcdn.com/et.svg',
        'Gabão': 'https://flagcdn.com/ga.svg',
        'Gâmbia': 'https://flagcdn.com/gm.svg',
        'Gana': 'https://flagcdn.com/gh.svg',
        'Guiné': 'https://flagcdn.com/gn.svg',
        'Guiné-Bissau': 'https://flagcdn.com/gw.svg',
        'Guiné Equatorial': 'https://flagcdn.com/gq.svg',
        'Lesoto': 'https://flagcdn.com/ls.svg',
        'Libéria': 'https://flagcdn.com/lr.svg',
        'Líbia': 'https://flagcdn.com/ly.svg',
        'Madagascar': 'https://flagcdn.com/mg.svg',
        'Malauí': 'https://flagcdn.com/mw.svg',
        'Mali': 'https://flagcdn.com/ml.svg',
        'Mauritânia': 'https://flagcdn.com/mr.svg',
        'Maurício': 'https://flagcdn.com/mu.svg',
        'Mayotte': 'https://flagcdn.com/yt.svg',
        'Marrocos': 'https://flagcdn.com/ma.svg',
        'Moçambique': 'https://flagcdn.com/mz.svg',
        'Namíbia': 'https://flagcdn.com/na.svg',
        'Níger': 'https://flagcdn.com/ne.svg',
        'Nigéria': 'https://flagcdn.com/ng.svg',
        'Quênia': 'https://flagcdn.com/ke.svg',
        'Reunião': 'https://flagcdn.com/re.svg',
        'Ruanda': 'https://flagcdn.com/rw.svg',
        'Saara do Oeste': 'https://flagcdn.com/eh.svg',
        'Santa Helena': 'https://flagcdn.com/sh.svg',
        'São Tomé e Príncipe': 'https://flagcdn.com/st.svg',
        'Senegal': 'https://flagcdn.com/sn.svg',
        'Seychelles': 'https://flagcdn.com/sc.svg', 
        'Serra Leoa': 'https://flagcdn.com/sl.svg',
        'Sudão': 'https://flagcdn.com/sd.svg',
        'Sudão do Sul': 'https://flagcdn.com/ss.svg',
        'Tanzânia': 'https://flagcdn.com/tz.svg',
        'Togo': 'https://flagcdn.com/tg.svg',
        'Tunísia': 'https://flagcdn.com/tn.svg',
        'Uganda': 'https://flagcdn.com/ug.svg',
        'Zâmbia': 'https://flagcdn.com/zm.svg',
        'Zimbábue': 'https://flagcdn.com/zw.svg'
    },
    asia: {
        'Afeganistão': 'https://flagcdn.com/af.svg',
        'Arábia Saudita': 'https://flagcdn.com/sa.svg',
        'Armênia': 'https://flagcdn.com/am.svg',
        'Azerbaijão': 'https://flagcdn.com/az.svg',
        'Bahrein': 'https://flagcdn.com/bh.svg',
        'Bangladesh': 'https://flagcdn.com/bd.svg',
        'Brunei': 'https://flagcdn.com/bn.svg',
        'Butão': 'https://flagcdn.com/bt.svg',
        'Camboja': 'https://flagcdn.com/kh.svg',
        'Cazaquistão': 'https://flagcdn.com/kz.svg',
        'Coréia do Norte': 'https://flagcdn.com/kp.svg',
        'Coréia do Sul': 'https://flagcdn.com/kr.svg',
        'China': 'https://flagcdn.com/cn.svg',
        'Emirados Árabes Unidos': 'https://flagcdn.com/ae.svg',
        'Filipinas': 'https://flagcdn.com/ph.svg',
        'Hong Kong': 'https://flagcdn.com/hk.svg',
        'Iemen': 'https://flagcdn.com/ye.svg',
        'Índia': 'https://flagcdn.com/in.svg',
        'Indonésia': 'https://flagcdn.com/id.svg',
        'Irã': 'https://flagcdn.com/ir.svg',
        'Iraque': 'https://flagcdn.com/iq.svg',
        'Israel': 'https://flagcdn.com/il.svg',
        'Japão': 'https://flagcdn.com/jp.svg',
        'Jordânia': 'https://flagcdn.com/jo.svg',
        'Kuwait': 'https://flagcdn.com/kw.svg',
        'Laos': 'https://flagcdn.com/la.svg',
        'Líbano': 'https://flagcdn.com/lb.svg',
        'Macau': 'https://flagcdn.com/mo.svg',
        'Malásia': 'https://flagcdn.com/my.svg',
        'Maldivas': 'https://flagcdn.com/mv.svg',
        'Mianmar': 'https://flagcdn.com/mn.svg',
        'Mongólia': 'https://flagcdn.com/mn.svg',
        'Nepal': 'https://flagcdn.com/np.svg',
        'Omã': 'https://flagcdn.com/om.svg',
        'Palestina': 'https://flagcdn.com/ps.svg',
        'Paquistão': 'https://flagcdn.com/pk.svg',
        'Qatar': 'https://flagcdn.com/qa.svg',
        'Quirguistão': 'https://flagcdn.com/kg.svg',
        'Singapura': 'https://flagcdn.com/sg.svg',
        'Síria': 'https://flagcdn.com/sy.svg',
        'Sri Lanka': 'https://flagcdn.com/lk.svg',
        'Tadjiquistão': 'https://flagcdn.com/tj.svg',
        'Tailândia': 'https://flagcdn.com/th.svg',
        'Taiwan': 'https://flagcdn.com/tw.svg',
        'Timor Leste': 'https://flagcdn.com/tl.svg',
        'Turcomenistão': 'https://flagcdn.com/tm.svg',
        'Turquia': 'https://flagcdn.com/tr.svg',
        'Uzbequistão': 'https://flagcdn.com/uz.svg',
        'Vietnã': 'https://flagcdn.com/vn.svg'
    },
    europe: {
        'Albânia': 'https://flagcdn.com/al.svg',
        'Alemanha': 'https://flagcdn.com/de.svg',
        'Andorra': 'https://flagcdn.com/ad.svg',
        'Áustria': 'https://flagcdn.com/at.svg',
        'Belarus': 'https://flagcdn.com/by.svg',
        'Bélgica': 'https://flagcdn.com/be.svg',
        'Bósnia-Herzegovina': 'https://flagcdn.com/ba.svg',
        'Bulgária': 'https://flagcdn.com/bg.svg',
        'Bulgária': 'https://flagcdn.com/bg.svg',
        'Chipre': 'https://flagcdn.com/cy.svg',
        'Croácia': 'https://flagcdn.com/hr.svg',
        'República Tcheca': 'https://flagcdn.com/cz.svg',
        'Dinamarca': 'https://flagcdn.com/dk.svg',
        'Eslováquia': 'https://flagcdn.com/sk.svg',
        'Eslovênia': 'https://flagcdn.com/si.svg',
        'Espanha': 'https://flagcdn.com/es.svg',
        'Estônia': 'https://flagcdn.com/ee.svg',
        'Finlândia': 'https://flagcdn.com/fi.svg',
        'França': 'https://flagcdn.com/fr.svg',
        'Geórgia': 'https://flagcdn.com/ge.svg',
        'Gibraltar': 'https://flagcdn.com/gi.svg',
        'Grécia': 'https://flagcdn.com/gr.svg',
        'Groenlândia': 'https://flagcdn.com/gl.svg',
        'Holanda': 'https://flagcdn.com/nl.svg',
        'Hungria': 'https://flagcdn.com/hu.svg',
        'Irlanda': 'https://flagcdn.com/ie.svg',
        'Islândia': 'https://flagcdn.com/is.svg',
        'Itália': 'https://flagcdn.com/it.svg',
        'Kosovo': 'https://flagcdn.com/xk.svg',
        'Letônia': 'https://flagcdn.com/lv.svg',
        'Liechtenstein': 'https://flagcdn.com/li.svg', 
        'Lituânia': 'https://flagcdn.com/lt.svg',
        'Luxemburgo': 'https://flagcdn.com/lu.svg',
        'Macedônia': 'https://flagcdn.com/mk.svg',
        'Malta': 'https://flagcdn.com/mt.svg',
        'Moldávia': 'https://flagcdn.com/md.svg',
        'Mônaco': 'https://flagcdn.com/mc.svg',
        'Montenegro': 'https://flagcdn.com/me.svg',
        'Noruega': 'https://flagcdn.com/no.svg',
        'Polônia': 'https://flagcdn.com/pl.svg',
        'Portugal': 'https://flagcdn.com/pt.svg',
        'Reino Unido': 'https://flagcdn.com/gb.svg',
        'Romênia': 'https://flagcdn.com/ro.svg',
        'Rússia': 'https://flagcdn.com/ru.svg',
        'San Marino': 'https://flagcdn.com/sm.svg',
        'Sérvia': 'https://flagcdn.com/rs.svg',
        'Suécia': 'https://flagcdn.com/se.svg',
        'Suiça': 'https://flagcdn.com/ch.svg', 
        'Ucrânia': 'https://flagcdn.com/ua.svg',
        'Vaticano': 'https://flagcdn.com/va.svg',
        'Ilhas Aland': 'https://flagcdn.com/ax.svg',
        'Ilhas Faroe': 'https://flagcdn.com/fo.svg'
    },
    'north-america': {
        'Canadá': 'https://flagcdn.com/ca.svg',
        'Estados Unidos': 'https://flagcdn.com/us.svg',
        'México': 'https://flagcdn.com/mx.svg'
    },

    'center-america': {
        'Anguilla': 'https://flagcdn.com/ai.svg',
        'Antígua e Barbuda': 'https://flagcdn.com/ag.svg',
        'Aruba': 'https://flagcdn.com/aw.svg',
        'Bahamas': 'https://flagcdn.com/bs.svg',
        'Barbados': 'https://flagcdn.com/bb.svg',
        'Belize': 'https://flagcdn.com/bz.svg',
        'Costa Rica': 'https://flagcdn.com/cr.svg',
        'Cuba': 'https://flagcdn.com/cu.svg',
        'Curaçao': 'https://flagcdn.com/cw.svg',
        'Dominica': 'https://flagcdn.com/dm.svg',
        'República Dominicana': 'https://flagcdn.com/do.svg',
        'El Salvador': 'https://flagcdn.com/sv.svg',
        'Granada': 'https://flagcdn.com/gd.svg',
        'Guadalupe': 'https://flagcdn.com/gp.svg',
        'Guatemala': 'https://flagcdn.com/gt.svg',
        'Haiti': 'https://flagcdn.com/ht.svg',
        'Honduras': 'https://flagcdn.com/hn.svg',
        'Jamaica': 'https://flagcdn.com/jm.svg',
        'Martinica': 'https://flagcdn.com/mq.svg',
        'Montserrat': 'https://flagcdn.com/ms.svg',
        'Nicarágua': 'https://flagcdn.com/ni.svg',
        'Panamá': 'https://flagcdn.com/pa.svg',
        'Porto Rico': 'https://flagcdn.com/pr.svg',
        'São Bartolomeu': 'https://flagcdn.com/bl.svg',
        'São Cristóvão e Nevis': 'https://flagcdn.com/kn.svg',
        'Santa Lucia': 'https://flagcdn.com/lc.svg',
        'São Martinho': 'https://flagcdn.com/sx.svg',
        'São Vicente e Granadinas': 'https://flagcdn.com/vc.svg',
        'Trinidad e Tobago': 'https://flagcdn.com/tt.svg',
        'Ilhas Bermudas': 'https://flagcdn.com/bm.svg',
        'Ilhas Cayman': 'https://flagcdn.com/ky.svg',
        'Ilhas Turks e Caicos': 'https://flagcdn.com/tc.svg',
        'Ilhas Virgens Britânicas': 'https://flagcdn.com/vg.svg',
        'Ilhas Virgens Americanas': 'https://flagcdn.com/vi.svg'
    },
    'south-america': {
        'Argentina': 'https://flagcdn.com/ar.svg',
        'Bolivia': 'https://flagcdn.com/bo.svg',
        'Brasil': 'https://flagcdn.com/br.svg',
        'Chile': 'https://flagcdn.com/cl.svg',
        'Colômbia': 'https://flagcdn.com/co.svg',
        'Equador': 'https://flagcdn.com/ec.svg',
        'Guiana': 'https://flagcdn.com/gy.svg',
        'Guiana Francesa': 'https://flagcdn.com/gf.svg',
        'Paraguai': 'https://flagcdn.com/py.svg',
        'Peru': 'https://flagcdn.com/pe.svg',
        'Suriname': 'https://flagcdn.com/sr.svg',
        'Uruguai': 'https://flagcdn.com/uy.svg',
        'Venezuela': 'https://flagcdn.com/ve.svg',
        'Ilhas Falkland (Ilhas Malvinas)': 'https://flagcdn.com/fk.svg'
    },
    oceania: {
        'Austrália': 'https://flagcdn.com/au.svg',
        'Fiji': 'https://flagcdn.com/fj.svg',
        'Guam': 'https://flagcdn.com/gu.svg',
        'kiribati': 'https://flagcdn.com/ki.svg',
        'Micronésia': 'https://flagcdn.com/fm.svg',
        'Nauru': 'https://flagcdn.com/nr.svg',
        'Niue': 'https://flagcdn.com/nu.svg',
        'Nova Caledônia': 'https://flagcdn.com/nc.svg',
        'Nova Zelândia': 'https://flagcdn.com/nz.svg',
        'Palau': 'https://flagcdn.com/pw.svg',
        'Papua Nova Guiné': 'https://flagcdn.com/pg.svg', 
        'Polinésia Francesa': 'https://flagcdn.com/pf.svg',
        'Samoa': 'https://flagcdn.com/ws.svg',
        'Samoa Americana': 'https://flagcdn.com/as.svg',
        'Tokelau': 'https://flagcdn.com/tk.svg',
        'Tonga': 'https://flagcdn.com/to.svg',
        'Tuvalu': 'https://flagcdn.com/tv.svg',
        'Vanuatu': 'https://flagcdn.com/vu.svg',
        'Wallis e Futuna': 'https://flagcdn.com/wf.svg',
        'Ilhas Christmas': 'https://flagcdn.com/cx.svg',
        'Ilhas Cocos': 'https://flagcdn.com/cc.svg',
        'Ilhas Cook': 'https://flagcdn.com/ck.svg',
        'Ilhas Mariana do Norte': 'https://flagcdn.com/mp.svg',
        'Ilhas Marshall': 'https://flagcdn.com/mh.svg',
        'Ilhas Norfolk': 'https://flagcdn.com/nf.svg',
        'Ilhas Pitcairn': 'https://flagcdn.com/pn.svg',
        'Ilhas Salomão': 'https://flagcdn.com/sb.svg'
    },
    antarctica: {
        'Antártida': 'https://flagcdn.com/aq.svg'
    }
};

function populateCountries() {
    const continentSelect = document.getElementById('continent');
    const countrySelect = document.getElementById('country');
    const continent = continentSelect.value;

    // Limpa a lista de países
    countrySelect.innerHTML = '<option value="">Selecione</option>';

    if (continent) {
        const countriesList = countries[continent];
        for (let country in countriesList) {
            let option = document.createElement('option');
            option.value = countriesList[country];
            option.text = country;
            countrySelect.appendChild(option);
        }
    }
}

function displayFlag() {
    const countrySelect = document.getElementById('country');
    const flagContainer = document.getElementById('flag-container');
    const flagUrl = countrySelect.value;

    flagContainer.innerHTML = '';

    if (flagUrl) {
        const img = document.createElement('img');
        img.src = flagUrl;
        img.alt = `Bandeira de ${countrySelect.options[countrySelect.selectedIndex].text}`;
        img.style.width = '300px';
        img.style.height = 'auto';
        flagContainer.appendChild(img);
    }
}
