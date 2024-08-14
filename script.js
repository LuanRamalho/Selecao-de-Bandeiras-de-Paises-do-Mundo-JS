// script.js

const countries = {
    africa: {
        '�frica do Sul': 'https://flagcdn.com/za.svg',
        'Angola': 'https://flagcdn.com/ao.svg',
        'Arg�lia': 'https://flagcdn.com/dz.svg',
        'Benin': 'https://flagcdn.com/bj.svg',
        'Botsuana': 'https://flagcdn.com/bw.svg',
        'Burkina Faso': 'https://flagcdn.com/bf.svg',
        'Burundi': 'https://flagcdn.com/bi.svg',
        'Camar�es': 'https://flagcdn.com/cm.svg',
        'Cabo Verde': 'https://flagcdn.com/cv.svg',
        'Rep�blica Centro Africana': 'https://flagcdn.com/cf.svg',
        'Chade': 'https://flagcdn.com/td.svg',
        'Comoros': 'https://flagcdn.com/km.svg',
        'Rep�blica do Congo': 'https://flagcdn.com/cg.svg',
        'Rep�blica Democr�tica do Congo': 'https://flagcdn.com/cd.svg',
        'Costa do Marfim': 'https://flagcdn.com/ci.svg',
        'Djibuti': 'https://flagcdn.com/dj.svg',
        'Egito': 'https://flagcdn.com/eg.svg',
        'Eritreia': 'https://flagcdn.com/er.svg',
        'Eswatini': 'https://flagcdn.com/sz.svg',
        'Eti�pia': 'https://flagcdn.com/et.svg',
        'Gab�o': 'https://flagcdn.com/ga.svg',
        'G�mbia': 'https://flagcdn.com/gm.svg',
        'Gana': 'https://flagcdn.com/gh.svg',
        'Guin�': 'https://flagcdn.com/gn.svg',
        'Guin�-Bissau': 'https://flagcdn.com/gw.svg',
        'Guin� Equatorial': 'https://flagcdn.com/gq.svg',
        'Lesoto': 'https://flagcdn.com/ls.svg',
        'Lib�ria': 'https://flagcdn.com/lr.svg',
        'L�bia': 'https://flagcdn.com/ly.svg',
        'Madagascar': 'https://flagcdn.com/mg.svg',
        'Malau�': 'https://flagcdn.com/mw.svg',
        'Mali': 'https://flagcdn.com/ml.svg',
        'Maurit�nia': 'https://flagcdn.com/mr.svg',
        'Maur�cio': 'https://flagcdn.com/mu.svg',
        'Mayotte': 'https://flagcdn.com/yt.svg',
        'Marrocos': 'https://flagcdn.com/ma.svg',
        'Mo�ambique': 'https://flagcdn.com/mz.svg',
        'Nam�bia': 'https://flagcdn.com/na.svg',
        'N�ger': 'https://flagcdn.com/ne.svg',
        'Nig�ria': 'https://flagcdn.com/ng.svg',
        'Qu�nia': 'https://flagcdn.com/ke.svg',
        'Reuni�o': 'https://flagcdn.com/re.svg',
        'Ruanda': 'https://flagcdn.com/rw.svg',
        'Saara do Oeste': 'https://flagcdn.com/eh.svg',
        'Santa Helena': 'https://flagcdn.com/sh.svg',
        'S�o Tom� e Pr�ncipe': 'https://flagcdn.com/st.svg',
        'Senegal': 'https://flagcdn.com/sn.svg',
        'Seychelles': 'https://flagcdn.com/sc.svg', 
        'Serra Leoa': 'https://flagcdn.com/sl.svg',
        'Sud�o': 'https://flagcdn.com/sd.svg',
        'Sud�o do Sul': 'https://flagcdn.com/ss.svg',
        'Tanz�nia': 'https://flagcdn.com/tz.svg',
        'Togo': 'https://flagcdn.com/tg.svg',
        'Tun�sia': 'https://flagcdn.com/tn.svg',
        'Uganda': 'https://flagcdn.com/ug.svg',
        'Z�mbia': 'https://flagcdn.com/zm.svg',
        'Zimb�bue': 'https://flagcdn.com/zw.svg'
    },
    asia: {
        'Afeganist�o': 'https://flagcdn.com/af.svg',
        'Ar�bia Saudita': 'https://flagcdn.com/sa.svg',
        'Arm�nia': 'https://flagcdn.com/am.svg',
        'Azerbaij�o': 'https://flagcdn.com/az.svg',
        'Bahrein': 'https://flagcdn.com/bh.svg',
        'Bangladesh': 'https://flagcdn.com/bd.svg',
        'Brunei': 'https://flagcdn.com/bn.svg',
        'But�o': 'https://flagcdn.com/bt.svg',
        'Camboja': 'https://flagcdn.com/kh.svg',
        'Cazaquist�o': 'https://flagcdn.com/kz.svg',
        'Cor�ia do Norte': 'https://flagcdn.com/kp.svg',
        'Cor�ia do Sul': 'https://flagcdn.com/kr.svg',
        'China': 'https://flagcdn.com/cn.svg',
        'Emirados �rabes Unidos': 'https://flagcdn.com/ae.svg',
        'Filipinas': 'https://flagcdn.com/ph.svg',
        'Hong Kong': 'https://flagcdn.com/hk.svg',
        'Iemen': 'https://flagcdn.com/ye.svg',
        '�ndia': 'https://flagcdn.com/in.svg',
        'Indon�sia': 'https://flagcdn.com/id.svg',
        'Ir�': 'https://flagcdn.com/ir.svg',
        'Iraque': 'https://flagcdn.com/iq.svg',
        'Israel': 'https://flagcdn.com/il.svg',
        'Jap�o': 'https://flagcdn.com/jp.svg',
        'Jord�nia': 'https://flagcdn.com/jo.svg',
        'Kuwait': 'https://flagcdn.com/kw.svg',
        'Laos': 'https://flagcdn.com/la.svg',
        'L�bano': 'https://flagcdn.com/lb.svg',
        'Macau': 'https://flagcdn.com/mo.svg',
        'Mal�sia': 'https://flagcdn.com/my.svg',
        'Maldivas': 'https://flagcdn.com/mv.svg',
        'Mianmar': 'https://flagcdn.com/mn.svg',
        'Mong�lia': 'https://flagcdn.com/mn.svg',
        'Nepal': 'https://flagcdn.com/np.svg',
        'Om�': 'https://flagcdn.com/om.svg',
        'Palestina': 'https://flagcdn.com/ps.svg',
        'Paquist�o': 'https://flagcdn.com/pk.svg',
        'Qatar': 'https://flagcdn.com/qa.svg',
        'Quirguist�o': 'https://flagcdn.com/kg.svg',
        'Singapura': 'https://flagcdn.com/sg.svg',
        'S�ria': 'https://flagcdn.com/sy.svg',
        'Sri Lanka': 'https://flagcdn.com/lk.svg',
        'Tadjiquist�o': 'https://flagcdn.com/tj.svg',
        'Tail�ndia': 'https://flagcdn.com/th.svg',
        'Taiwan': 'https://flagcdn.com/tw.svg',
        'Timor Leste': 'https://flagcdn.com/tl.svg',
        'Turcomenist�o': 'https://flagcdn.com/tm.svg',
        'Turquia': 'https://flagcdn.com/tr.svg',
        'Uzbequist�o': 'https://flagcdn.com/uz.svg',
        'Vietn�': 'https://flagcdn.com/vn.svg'
    },
    europe: {
        'Alb�nia': 'https://flagcdn.com/al.svg',
        'Alemanha': 'https://flagcdn.com/de.svg',
        'Andorra': 'https://flagcdn.com/ad.svg',
        '�ustria': 'https://flagcdn.com/at.svg',
        'Belarus': 'https://flagcdn.com/by.svg',
        'B�lgica': 'https://flagcdn.com/be.svg',
        'B�snia-Herzegovina': 'https://flagcdn.com/ba.svg',
        'Bulg�ria': 'https://flagcdn.com/bg.svg',
        'Bulg�ria': 'https://flagcdn.com/bg.svg',
        'Chipre': 'https://flagcdn.com/cy.svg',
        'Cro�cia': 'https://flagcdn.com/hr.svg',
        'Rep�blica Tcheca': 'https://flagcdn.com/cz.svg',
        'Dinamarca': 'https://flagcdn.com/dk.svg',
        'Eslov�quia': 'https://flagcdn.com/sk.svg',
        'Eslov�nia': 'https://flagcdn.com/si.svg',
        'Espanha': 'https://flagcdn.com/es.svg',
        'Est�nia': 'https://flagcdn.com/ee.svg',
        'Finl�ndia': 'https://flagcdn.com/fi.svg',
        'Fran�a': 'https://flagcdn.com/fr.svg',
        'Ge�rgia': 'https://flagcdn.com/ge.svg',
        'Gibraltar': 'https://flagcdn.com/gi.svg',
        'Gr�cia': 'https://flagcdn.com/gr.svg',
        'Groenl�ndia': 'https://flagcdn.com/gl.svg',
        'Holanda': 'https://flagcdn.com/nl.svg',
        'Hungria': 'https://flagcdn.com/hu.svg',
        'Irlanda': 'https://flagcdn.com/ie.svg',
        'Isl�ndia': 'https://flagcdn.com/is.svg',
        'It�lia': 'https://flagcdn.com/it.svg',
        'Kosovo': 'https://flagcdn.com/xk.svg',
        'Let�nia': 'https://flagcdn.com/lv.svg',
        'Liechtenstein': 'https://flagcdn.com/li.svg', 
        'Litu�nia': 'https://flagcdn.com/lt.svg',
        'Luxemburgo': 'https://flagcdn.com/lu.svg',
        'Maced�nia': 'https://flagcdn.com/mk.svg',
        'Malta': 'https://flagcdn.com/mt.svg',
        'Mold�via': 'https://flagcdn.com/md.svg',
        'M�naco': 'https://flagcdn.com/mc.svg',
        'Montenegro': 'https://flagcdn.com/me.svg',
        'Noruega': 'https://flagcdn.com/no.svg',
        'Pol�nia': 'https://flagcdn.com/pl.svg',
        'Portugal': 'https://flagcdn.com/pt.svg',
        'Reino Unido': 'https://flagcdn.com/gb.svg',
        'Rom�nia': 'https://flagcdn.com/ro.svg',
        'R�ssia': 'https://flagcdn.com/ru.svg',
        'San Marino': 'https://flagcdn.com/sm.svg',
        'S�rvia': 'https://flagcdn.com/rs.svg',
        'Su�cia': 'https://flagcdn.com/se.svg',
        'Sui�a': 'https://flagcdn.com/ch.svg', 
        'Ucr�nia': 'https://flagcdn.com/ua.svg',
        'Vaticano': 'https://flagcdn.com/va.svg',
        'Ilhas Aland': 'https://flagcdn.com/ax.svg',
        'Ilhas Faroe': 'https://flagcdn.com/fo.svg'
    },
    'north-america': {
        'Canad�': 'https://flagcdn.com/ca.svg',
        'Estados Unidos': 'https://flagcdn.com/us.svg',
        'M�xico': 'https://flagcdn.com/mx.svg'
    },

    'center-america': {
        'Anguilla': 'https://flagcdn.com/ai.svg',
        'Ant�gua e Barbuda': 'https://flagcdn.com/ag.svg',
        'Aruba': 'https://flagcdn.com/aw.svg',
        'Bahamas': 'https://flagcdn.com/bs.svg',
        'Barbados': 'https://flagcdn.com/bb.svg',
        'Belize': 'https://flagcdn.com/bz.svg',
        'Costa Rica': 'https://flagcdn.com/cr.svg',
        'Cuba': 'https://flagcdn.com/cu.svg',
        'Cura�ao': 'https://flagcdn.com/cw.svg',
        'Dominica': 'https://flagcdn.com/dm.svg',
        'Rep�blica Dominicana': 'https://flagcdn.com/do.svg',
        'El Salvador': 'https://flagcdn.com/sv.svg',
        'Granada': 'https://flagcdn.com/gd.svg',
        'Guadalupe': 'https://flagcdn.com/gp.svg',
        'Guatemala': 'https://flagcdn.com/gt.svg',
        'Haiti': 'https://flagcdn.com/ht.svg',
        'Honduras': 'https://flagcdn.com/hn.svg',
        'Jamaica': 'https://flagcdn.com/jm.svg',
        'Martinica': 'https://flagcdn.com/mq.svg',
        'Montserrat': 'https://flagcdn.com/ms.svg',
        'Nicar�gua': 'https://flagcdn.com/ni.svg',
        'Panam�': 'https://flagcdn.com/pa.svg',
        'Porto Rico': 'https://flagcdn.com/pr.svg',
        'S�o Bartolomeu': 'https://flagcdn.com/bl.svg',
        'S�o Crist�v�o e Nevis': 'https://flagcdn.com/kn.svg',
        'Santa Lucia': 'https://flagcdn.com/lc.svg',
        'S�o Martinho': 'https://flagcdn.com/sx.svg',
        'S�o Vicente e Granadinas': 'https://flagcdn.com/vc.svg',
        'Trinidad e Tobago': 'https://flagcdn.com/tt.svg',
        'Ilhas Bermudas': 'https://flagcdn.com/bm.svg',
        'Ilhas Cayman': 'https://flagcdn.com/ky.svg',
        'Ilhas Turks e Caicos': 'https://flagcdn.com/tc.svg',
        'Ilhas Virgens Brit�nicas': 'https://flagcdn.com/vg.svg',
        'Ilhas Virgens Americanas': 'https://flagcdn.com/vi.svg'
    },
    'south-america': {
        'Argentina': 'https://flagcdn.com/ar.svg',
        'Bolivia': 'https://flagcdn.com/bo.svg',
        'Brasil': 'https://flagcdn.com/br.svg',
        'Chile': 'https://flagcdn.com/cl.svg',
        'Col�mbia': 'https://flagcdn.com/co.svg',
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
        'Austr�lia': 'https://flagcdn.com/au.svg',
        'Fiji': 'https://flagcdn.com/fj.svg',
        'Guam': 'https://flagcdn.com/gu.svg',
        'kiribati': 'https://flagcdn.com/ki.svg',
        'Micron�sia': 'https://flagcdn.com/fm.svg',
        'Nauru': 'https://flagcdn.com/nr.svg',
        'Niue': 'https://flagcdn.com/nu.svg',
        'Nova Caled�nia': 'https://flagcdn.com/nc.svg',
        'Nova Zel�ndia': 'https://flagcdn.com/nz.svg',
        'Palau': 'https://flagcdn.com/pw.svg',
        'Papua Nova Guin�': 'https://flagcdn.com/pg.svg', 
        'Polin�sia Francesa': 'https://flagcdn.com/pf.svg',
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
        'Ilhas Salom�o': 'https://flagcdn.com/sb.svg'
    },
    antarctica: {
        'Ant�rtida': 'https://flagcdn.com/aq.svg'
    }
};

function populateCountries() {
    const continentSelect = document.getElementById('continent');
    const countrySelect = document.getElementById('country');
    const continent = continentSelect.value;

    // Limpa a lista de pa�ses
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
