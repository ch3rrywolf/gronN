
module.exports = ({AVCDAQ12, AVCCAQ15,AVCCAQ16, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14 , PGAVQ1, PGAVQ2, PGAVQ3, PGAVQ4, benefNom, benefPreNom, chantierNomDO, chantierSirenDO, chantierAdresseDO, chantierAdresse, createdAt, imagesMO, imagesAA, imagesAE, imagesIC})=> {
    const today = new Date();
    return `
<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>5eb41550-0e85-4658-911d-ebcab58831c7</title><style type="text/css"> * {margin:0; padding:0; text-indent:0; }
 h2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8pt; }
 .s1 { color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt; }
 .s2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt; }
 a { color: #00F; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt; }
 .s3 { color: #FFF; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
 .s4 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt; }
 h1 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt; }
 .s5 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }
 p { color: black; font-family:"Calibri Light", sans-serif; font-style: italic; font-weight: normal; text-decoration: none; font-size: 8pt; margin:0pt; }
 .s6 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt; }
 .s7 { color: black; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 7.5pt; }
 table, tbody {vertical-align: top; overflow: visible; }
 body {
    width: 210mm; /* A4 width */
    height: 297mm; /* A4 height */
    justify-content: center;
    align-items: center;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  .content {
    text-align: center;
    background-color: #f4f4f4;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
</head>
<body >
<div class="content">
             <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
         <table border="1" style="margin: 10px auto; margin-right:auto; margin-left: 0; border-collapse: collapse;">
        <tr>
        <td>
            <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
            </td>
            </tr>
            </table>
    </div>

    <!-- Right Section -->
    <div id="center-section" style="display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
        <table  style="margin: 10px auto; margin-right:auto; margin-left: 100pt; border-collapse: collapse;">
            <tr>
                <td>
                   <h2 style=" color: #000; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt;">RAPPORT D’INSPECTION SUR LE LIEU DE L’OPERATION <br/>AVANT TRAVAUX</h2>
                </td>
            </tr>
        </table>
    </div>
</div>
                        

 <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table  style="border-collapse: collapse;">
            <tr>
                <td>
                    <img  width="25" height="40" src="data:image/jpg;base64,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"/>
                    </td>
                    <td>
                    <p class="s2" style="padding-left: 30pt;text-indent: 0pt;text-align: left;">N°3-2067</p>
                <p style="padding-top: 1pt;padding-left: 30pt;text-indent: 0pt;text-align: left;">
                <a href="http://www.cofrac.fr/" style=" color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 8.5pt;" target="_blank">Liste des implantations et portées </a></p>
                <p style="padding-top: 1pt;padding-left: 30pt;text-indent: 0pt;text-align: left;">disponibles sur<a href="http://www.cofrac.fr/" target="_blank">www.cofrac.fr</a></p>
                
                    </td>
           
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>


                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Contrôle de l'audit énergétique <br>AVANT TRAVAUX</p>
                <p class="s3" style="margin: 0;line-height: 14pt;font-family: Calibri, sans-serif;text-align: center;">pour la fiche BAR TH 145</p>
                </div>

                <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;"/>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <div style="background:#CE4627;border:0.7pt solid #000000;display:block;left:0.4pt;min-height:18.4pt;top:0.4pt;width:550.8pt;">
                <p style="padding-left: 1pt;text-indent: 0pt;line-height: 11pt;text-align: center;">
                <span style=" color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt;">PHOTO BÂTIMENT</span></p></div>
                <p style="padding-left: 5pt;text-indent: 0pt;text-align: center;"/>
                <p style="padding-top: 10pt;text-indent: 0pt;text-align: center; border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt"">${imagesMO}</p><br/>
                
                <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt; ">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Adresse des travaux :</h1>
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Nom :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${benefNom}${' '}${benefPreNom}</p></td></tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Adresse :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${chantierAdresse}</p>
                </td>
                </tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Type de Logement :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ1}</p>
                </td>
                </tr>
                </table>
                <br/>
               
                <table style="border-collapse:collapse;margin-right: 0; " cellspacing="0">
                <tr style="height:15pt">
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" rowspan="2">
                <p class="s4" style="padding-top: 9pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Accompagnateur :</p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${benefNom}</p>
                </td>
                </tr>
                
                </table>
<br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:15pt">
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 9pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Conclusion du constat de l'audit :</p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ9}</p>
                </td>
                </tr>
                </table>
<br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:15pt">
                <td style=" background:#CE4627; width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p style=" color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">Date de visite</p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt ; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#FFF">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ4.split("T")[0]}</p>
                </td>
                </tr>
                </table>
                <br/>
                 <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:15pt">
                <td style=" background:#CE4627; width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p style=" color: #FFF; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">Date saisie rapport</p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt " bgcolor="#FFF">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${createdAt.split("T")[0]}</p>
                </td>
                </tr>
                </table>
                

                <p style="padding-top: 9pt;padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: center;">Ce document est la propriété de la société L.A INSPECTION, il ne pourra, sans autorisation écrite être utilisé ou communiqué à des tiers.</p>
                <p style="text-indent: 0pt;line-height: 10pt;text-align: center;">Toutes précautions utiles seront prises pour éviter sa divulgation.</p>
                <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p style="padding-left: 1pt;text-indent: 0pt;text-align: center;">Le rapport établi répond aux exigences réglementaires en vigueur le jour du contrôle.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">1/8</p>



                <br/>

    
                <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <img width="70" height="67" 
                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
                </td>
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>

<div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Administratif</p>
                </div>

<br/>
                <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Donneur d’ordre :</h1>
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${chantierNomDO}</p></td></tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${chantierAdresseDO}</p>
                </td>
                </tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Siren :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${chantierSirenDO}</p>
                </td>
                </tr>
                </table>
                <br/>

                 <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Bénéficiaire :</h1>
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom ou personne moral :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${benefNom}${' '}${benefPreNom}</p></td></tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${chantierAdresse}</p>
                </td>
                </table>
                <br/>

                <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Entreprise <br/> ayant effectué <br/> l'étude énergétique:</h1>
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Raison sociale :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ1}</p></td></tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ2}</p>
                </td>
                </tr>
                <tr style="height:16pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Siret :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ3}</p>
                </td>
                </tr>
                </tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Référence de l'étude énergétique (RGE étude) :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ4}</p>
                </td>
                </tr>
                </tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Numéro de diagnostiqueur (si pertinent):</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ5}</p>
                </td>
                </tr>
                </table>
                <br/>


                <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 7pt;text-indent: 0pt;text-align: left;">Bureau de contrôle :</h1>
                <td style="width:56pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Raison sociale :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">L.A INSPECTION</p></td></tr>
                <tr style="height:25pt">
                <td style="width:56pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Adresse :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">15 Rue Françoise Giroud 57280 Maizières-Lès-Metz</p>
                </td>
                </tr>
                <tr style="height:16pt">
                <td style="width:56pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Siren :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">918 710 492</p>
                </td>
                </tr>
                </tr>
                <tr style="height:25pt">
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Numéro d’accréditation COFRAC :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">3-2067</p>
                </td>
                </tr>
                </tr>
                </table>
                <br/>

                <table style="border-collapse:collapse;margin-left: 165pt" cellspacing="0">
                <tr style="height:16pt">
                <p style="text-indent: 0pt;text-align: left;"/>
                <h1 style="padding-left: 7pt;  text-indent: 0pt;text-align: left;">Inspecteur :</h1>
                <td style="width:100pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom, Prénom :</p></td>
                <td style="width:287pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${ADAVQ6}</p>
                </td>
                </tr>
                
                </table>
               <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:15pt">
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Compagnie d’assurance : </p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">Assureur Lloyd’s : Lloyd’s Insurance Company S.A. par l’intermédiaire de Add Value Assurances</p>
                </td>
                </tr>
                </table>
                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:15pt">
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">N° de police et date de validité : </p></td>
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#f4b48f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">BRCP101020 du 31/01/2024 au 31/01/2025</p>
                </td>
                </tr>
                </table>

                <br/>
                <br/>

                <p style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu'aux parties accessibles lors de l'intervention sur site.</p>
                <p class="s6" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: center;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">2/8</p>
                <br/><br/>

        

                <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <img width="70" height="67" 
                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
                </td>
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
       <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>

<div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Contrôle du contenu de l'audit</p>
                </div>
                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Date de l'étude énergétique: </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ1}</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Référence de l'audit énergétique: </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ2}</p>
                </td>
                </tr>
                </table>
                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">L’audit énergétique à été réalisé à l’aide d’un logiciel répondant aux exigences de la fiche d’opération standardisée BAR-TH-164</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ3}</p>
                </td>
                </tr>
                </table>

                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Logiciel énergétique : </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">BAO Evolution SED - PERRENOUD</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Version et date : </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ5}</p>
                </td>
                </tr>
                </table>
                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">L’audit énergétique ne mentionne pas les valeurs des consommations conventionnelles en énergie primaire et en énergie finale avant et après l’opération</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ6}</p>
                </td>
                </tr>
                </table>


                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Surface habitable déclaré : </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ7}</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Surface habitable Mesurée :</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ8}</p>
                </td>
                </tr>
                </table>

                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Surface tertiaire déclaré : </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ15}</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Surface tertiaire Mesurée :</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ16}</p>
                </td>
                </tr>
                </table>

                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Il est constaté un écart de surface habitable de plus de 10 %</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ10}</p>
                </td>
                </tr>
                </table>

                <br/>
                
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">L’audit énergétique montre que le niveau de confort thermique de la situation après
travaux est inférieur à celui de la situation initiale, y compris en période de rigueur
hivernale, notamment au travers de la note de calcul de dimensionnement du
nouveau générateur de chauffage le cas échéant</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ11}</p>
                </td>
                </tr>
                </table>

                <br/>
                
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">L’audit énergétique retranche des consommations conventionnelles d’énergies
primaire ou finale la production d’électricité autoconsommée ou exportée</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ12}</p>
                </td>
                </tr>
                </table>

                <br/>
                
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">L’audit énergétique prend en compte des installations de chauffage qui ne sont pas
fixes.</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ13}</p>
                </td>
                </tr>
                </table>

                <br/>
                
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Batiment résidentiel collectif existant depuis plus de 2 ans la date d'engagement de
l'opration</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCCAQ14}</p>
                </td>
                </tr>
                </table>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">3/8</p>




<br/>
<br/>


                
    <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <img width="70" height="67" 
                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
                </td>
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
         <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>

<div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">COUP DE POUCE " Rénovation performante d'un batiment résidentiel collectif"</p>
                </div>
                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Scénarios de travaux répondant aux critères du coup de pouce</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ1}</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ2}</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ3}</p>
                </td>
                </tr>
                </table>

                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">La consommation conventionnelle annuelle en énergie primaire après travaux, rapportée à la
surface habitable du bâtiment, est inférieure à 331 kWh/(m2 .an).</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ4}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Baisse de consommation conventionnelle annuelle en énergie primaire d'au moins 35 % (sans
déduction de la production d'électricité autoconsommée ou exportée) sur les usages chauffage,
refroidissement et production d'eau chaude sanitaire</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ5}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Les émissions annuelles de gaz à effet de serre après rénovation, rapportées à la surface
habitable du bâtiment, sont inférieures ou égales à la valeur initiale de ces émissions avant
travaux</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ6}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Les changements d’équipements de chauffage ou de production d’eau chaude sanitaire le cas
échéant préconisés, hors raccordement à un réseau de chaleur, ne conduisent :
a. Ni à l’installation d’équipements de chauffage ou de production d’eau chaude sanitaire
consommant majoritairement du charbon, du fioul ou du gaz
b. Ni à une hausse des émissions de gaz à effet de serre</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ7}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Les travaux de rénovation préconisés comportent au moins un des gestes d’isolation listés cidessous:</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ8}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Travaux d'isolation thermique des murs couvrant au moins 75 % de la surface totale des murs
donnant sur l'extérieur et mettant en œuvre un procédé d'isolation par l'intérieur ou par</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ9}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Travaux d'isolation thermique des toitures mettant en œuvre un procédé d'isolation
comportant un ou des matériaux d'isolation thermique en toiture-terrasse ou en rampant de
toiture et couvrant au moins 75 % de la surface totale des toitures</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ10}</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Travaux d'isolation thermique des planchers des combles perdus et des planchers bas et
couvrant au moins 75 % de la surface totale des planchers des combles perdus et des planchers
bas situés entre un volume chauffé et un sous-sol non chauffé, un vide sanitaire ou un passage </p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDPQ11}</p>
                </td>
                </tr>
                </table>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">4/8</p>


                

                <br/>
<br/>


                
    <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <img width="70" height="67" 
                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
                </td>
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
         <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>

<div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Hors Coup de Pouce </p>
                </div>
                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Scénarios de travaux répondant aux
critères de la fiche d'opération
standardisée BAR-TH-145</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;" bgcolor="#f4e78f">${AVHCPQ1}</p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;" bgcolor="#f4e78f">${AVHCPQ2}</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;" bgcolor="#f4e78f">${AVHCPQ3}</p>
                </td>
                </tr>
                </table>

                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Baisse de consommation conventionnelle annuelle en énergie primaire d'au moins 35 % (sans
déduction de la production d'électricité autoconsommée ou exportée) sur les usages chauffage,
refroidissement et production d'eau chaude sanitaire
</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt;" bgcolor="#f4e78f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;"  bgcolor="#f4e78f">Sans objet</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">La consommation conventionnelle annuelle en énergie primaire après travaux, rapportée à la
surface habitable du bâtiment, est inférieure à 331 kWh/(m2 .an).</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt;" bgcolor="#f4e78f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;"  bgcolor="#f4e78f">Sans objet</p>
                </td>
                </tr>
                </table>
    <br/>

    <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Les émissions annuelles de gaz à effet de serre après rénovation, rapportées à la surface
habitable du bâtiment, sont inférieures ou égales à la valeur initiale de ces émissions avant
travaux.
</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt;" bgcolor="#f4e78f">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;"  bgcolor="#f4e78f">Sans objet</p>
                </td>
                </tr>
                </table>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

                <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">5/8</p>



<br/>
<br/>
                
                
    <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
    <!-- Left Section -->
    <div id="left-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <img width="70" height="67" 
                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/x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"/>
                </td>
            </tr>
        </table>
    </div>

    <!-- Right Section -->
    <div id="right-section">
        <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
    </div>
</div>

<br/>
                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">CONTRÔLE DE L'AUDIT </p>
                </div>
                <br/>
                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:37.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Contrôle des données d'entrée de la situation initiale utilisées dans l'audit énergétique  </p>
                </div>
                <br/>

<table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:390pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart manifeste entre les données d'entrées de la situation initiale utilisée dans l'audit énergétique et les
éléments constatés lors de la visite sur site (avant travaux): 
</p></td>
                <td style="width:160pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ1}</p>
                </td>
                </tr>
                </table><br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart concernant le niveau d'isolation des parois enveloppes du bâtiment:
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ2}</p>
                </td>
                </tr>
                </table><br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart concernant le niveau d'isolation des menuiseries et surfaces mises en jeu :
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ3}</p>
                </td>
                </tr>
                </table><br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart concernant la nature des combles (aménagés, perdus) ;
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ4}</p>
                </td>
                </tr>
                </table><br/>

                

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart dans la description des systèmes de chauffage et de production d’eau
chaude sanitaire, de la génération à l’émission :
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ6}</p>
                </td>
                </tr>
                </table><br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart dans la description des systèmes de ventilation :
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ7}</p>
                </td>
                </tr>
                </table><br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:280pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Ecart dans la description de refroidissement, le cas échéant :
</p></td>
                <td style="width:270pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ8}</p>
                </td>
                </tr>
                </table>
                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Conclusion du constat de l'audit :
</p></td>
                <td style="width:430pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ9}</p>
                </td>
                </tr>
                </table>

                <br/>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:550pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt; border-right-style:solid;border-right-width:1pt; border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;" >Commentaires:
</p>
                </tr>
                <tr style="height:30pt">
                <td style="width:550pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; border-right-style:solid;border-right-width:1pt;">
                <p class="s4" style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${AVCDAQ10}
</p>
                </tr>
                </table>

                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Nom du technicien : </p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;"></p>
                </td>
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: left;">Signature le :</p></td>
                <td style="width:155pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt">
                <p style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">${AVCDAQ12}</p>
                </td>
                </tr>
                </table>

                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:20pt">
                <td style="width:275pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">${AVCDAQ11}</p></td>
                
                <td style="width:275pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; border-right-style:solid;border-right-width:1pt">
                <p class="s4" style="padding-top: 1pt;padding-left: 1pt;text-indent: 0pt;text-align: center;">${imagesIC}</p></td>
                
                </tr>
                </table>

                   <br/>
    <br/>
    <br/>

                <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">6/8</p>
                


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                                
                                
                    <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
                    <!-- Left Section -->
                    <div id="left-section">
                        <table border="1" style="border-collapse: collapse;">
                            <tr>
                                <td>
                                    <img width="70" height="67" 
                                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/xF/H/YYYuF5hf6/V6AJLm6Lq+HSYAqABSPfT4oQqIiJnzawaY+NkU7jIaaxTEY8RLG3mv2lnEKpamvRlvZVwiTbDCMim8BRMqfgrvKGziJc36NY7HdXihB52lLowr2MGWwsP5ZFXpegqBIy6wvxExz1q4hul7XiZwQ7zFsNoZmaOTr/02uV+NOFBMbBnxUXBpZQ58Sc+0/A5rJObF4NNgPluMFhIJoTLcOM/WlC2ALCvDp/mW4mRE6TU93gub7nCt6uCEeM2XaUPHWaMc4sH4rwTzOgdbTJpXxcYNNwLW5kj7VbBOv6vgw+vtfz1nA2OhH41VtHfMC9HPa+ecFsZsg/7qlp743pO1GyRQVR0RCV3XQ/3m1M6tyyXOvucYZDYvc4sFTnz3l56WXV9wF+sTsjTPV81LHk+/6/Xodu8x+DsoaVpJq9bM7WCCIgW2tWYKl4WbphXhSXMJrnW/BnX2uI60KJTS1s75BnaKGZ5T1RBmFUnPU2Stq+5jvkpsGlUwH5EjK0yoIEqIvVDRfAuu9bzAFN8u8T1ZYL0+Us4UjalhYBMvQwCfj4xIyUtj4ZT8m5mJBWdFcgCz7mUZ5mCYsuDo1CYjxYrwrhwJGs1Hz0vQJV44Kw2KIJ5qAtv//Y88c+87gK4DIfKDA6VHqO75cDGbIwV+AJD5HL/94G2AVnXQVGZcRVPfeOqnsuuGG7VyfbKUdD83ONbxz773jBohiR+FQiASMR4IZvjQfusKTWQUgdAqjry4NZJ5wWhtSr9ljUHS1Zs+EScMPytdWWCsNC1SDMLkFOAUwK6Y+R4vQgtqkqcs095w4QBbmJ3XuBv+64mWIBmYrYmp4he1hRKeZ3ihH0dz6i3fs9ZUkDja6GgX8+r8W6dVKswDQlaAkWnCrXZXUJmeIa/
                            xX7Ia4wbrjNoTKo8ot3PaUTWbEadW2kOJGIuid6Eo4uFT0HOojBU0LCRP7VRBhMp7RLntiuanM5IptzNLHD/STxh7aJerN9uGQNULJuMiy6kCZ7GuUrw5bqryo4LhGGN3MumkXTkKhaMM3IAdYVbFmBA2gkvP2cTTZVHc+pW0+D2ifsyOLHFlShrBdm7ePs7Fz0shmuGE1/hNyADtTGvhXQeP0lb8PkOEQ0t3pispyCGQk4Nu4CqOpxK4B9fJL7zK8C2+7E0oV2JyeNahGqM5ikjkRpoR++5emLqBUupXnHqijblh94dyg2Me41uVrosVJrkq5eQYKoBxpbx+yk3GvOIDMXXjjUA6SpQTjKeVlOzItFxQPEzgMrxh+dIIjSKDIco05iQLa3+YrEtnltwrwhEpXlmY4B0caYYBUgDTSlU0ygrJbqhe2LTelypJ/ul+TQduToWVpSUog8JG/nKx5SxBhaJBEDNoB6sXxcyO2+VUiI5cDJlfM0gp7Z2biBB1qZRirT9DzoMdi82YX88l+X1mlIStkpxXtFf6GuR981pBBSZgXiRFIQGNFLxbLQtHmJrh2VyLIFPvShbXRPD0HsqPNFBMOFou63ehhWzHZUPpQJeQESMp3TagYrTmW/s++7N0nWYrM+yux68ul0Xy2SzRaiyeKKZ3MOYO04r0l/bY9UACvRz52P1y+MOfAACcfd+tMvRxcjSeomGw6nKJN//oaZ3t2y8AcO4jd2Bx6fmYqpkdlk/KY/sxZnTB5FSMSa0vW51KVdOImlMZph+8c8VDoIr9t70ds+sPpPJeX3f/Q6kWq1OOcuwRLSndDe5bi3ijAGBeIs2jVpXoNVwFG4KL0qDaP1MS+zWq/VJv/sqjCgAv/PoJQEQOvPWdOp4sj2k6L1PXLaTLoDGfZMsvmqaG07C12e3eM/R2nblq3wcvZqFFT1kEE3QFoYW77uibhoMwVfzpS/fhxGNP6cbBQ3L8mz/G+U9+YODFVBKmzjSCAYrff+ZDkM4U+4O8u3ZXPNojWsKzffHfkVCpIAt2JYKuuutktiqYiL7a93jDFx4BAFx97oJq38uzn/soNr91GntvOobZvv26fOmyUGoj3y1BJpMT0cWl56N0mBKD8YaObJHNO11Ktq7SShGCL3LWrmPjkIUZgnfd0cu3192yiV2HjwAANg69Ut7yk3M4/o3HsyJvfvAU3KkGlwfepbQUhKxA4gUKXuP7MWrgS1kulEiSoEnLrO0U8HjIxisOA8sl0xAAWF5+UfurW7L36Am8/M57cOlXP8Plc7+B9ksc+/oPMoJuY9eIvZwp7ds8ORzj8EFiUkJlxtmofLmh0NS3sUtqV1II0OvuIzcJaXHIfaq49s+/cfCyzSrSI2McD+irk8S/fPWzcvEXj+P4wz9UiMih99+LM3fegpe97d2Q+fC9wflP3zO6zCj1Yhu3fucJla7DzQ+e0j9+/uN0GkHZ0XjLYJ27XvVaFRsKBBBc/cefMQT0ojQq8DIy7be2ZPPbp1NKS0KrLhc4e/cmRGYDVcmIQLDjpauikxtyguhmQNdBlwuR2RyqPQDBqz/1AADo4oWL8tKzvxPpxJj/3x99SF5z3wN64PY7RFV1oOVKhrotoUe/9n3ZOHgIfoPGrx1MEpAzdx2rYkO/dUVuf/Kv8EMX23r27k0ZIvt0KaJ9r8FJouW96xQiossluj170W9dgcxm0MHtBpjZLKMEKVn7fkg9+XmYHY3LnHjsKWwcPFTxQZ+BDIuWC8wrKBcHgmeNRw6w6ySXBzb5VClaZjPo9rWsBFJGgrdERQb8Ba8PqI7ficq38T4YdPAoOrdbm+uNrBSzzGePKbxJiUFJYbLi2GrwteIKdmOlKAB0RXgFZaEaY1gB+6MQLYdq/HlJgk+VJnft6oM7xikFPguuWV+ZJxl3XkgjoijVMQdle13LNdYx3F3z6oh7F1qAxZmqlAwhqQkiBU5QV6vtfpAklMivaZxymYZZIzk16vg+ZXpJq454htEVWXkarY98RqioT2vfLQCMXxiADEscjvyOwoQM0TqAj7JnsInYUmqXVswEKc0w0lmZJrRpNL1WIyV9AmIthK0LpjgkEKJTH+vWYCvYQEko7pGxeIPRnitVZ9xho3gqoqm9bILyQy9iEJCDo1RdyUsLV
                            eQJFZ4OtoTXzETjXAlZ+yarOGach9RxO+2QE14V4dGJVBfVOVPB7QlaXuKPo6rN6VxoKJExthZTSgcIpcQ/7zWJxfDcR0uUbfqI3+kA1oeEij6vdxnJWKX4L6rKTfx1pGfOE/O4vFU0Jak5b0qdcK9RU1lhMSWfy7Cdo78q+HozZEb9zjihc2KQGmTlcNkNzZakvXfvazX/TQZ85RtEq5XPeTemmFxjhydpesVz6ud5soyGN6wxWDFtzQLJldLum5xKv97cPdxk0QKreM5aNE9WYwuwYE1wpt76Kt3xxYpJRddAZAqBruXjjZ1TLwDDR0pmHL7uYZ79xnh8dbZtyyj+XKkgrWOTRV7VLOJuQn6nsk5r2AxTaKpNfSEvNJeXtcsRam65OmZlRet2pFWjpbk1jxp3NlwOnkpeZk7GZa36zLDrs1I9Gm+fw3W4libVuVKrKFw5okJyjDer40UTx0SsmTPU8BtWhhkJ1YAtjZLyUlA0u1vbuZpTRYGqynwDsF9mOtzhfZMX/oomN6iq72myqyvFGEnNbBvB+duY+Yac/PkfGJf/LzLfEZs2R1XVvpfhP9xmOf7oYiEnT58vHxX5/6gDJmsQI6t9gUV7ra3BKMZobQnRf7K1/vWF71tfXkf/wxQzhiYcf0O3E/zM0/TrDgATYwRr+GtR0DoMtf4db72xGjbamFbcYJ7W4MN/GV58faod6K+j96rWjja/4w+rVUunvbaMSOiWldgvw8e/IUHQP4s6i2Htt0yZYbwy/HduHH9sLHIV7wqXagnY2gRPN7b2dN6VC8j50GVLr/BDjJGNDb3w8BdlYmNc9Wl+uQwHXddVKDAeg7hXttkMFx758vBVVp15IoUCtUZ99gphRGTIgCmBpkB75q6jI4FKFjHzOl4M/efyP5NDQ5oYSPfpOZfxRtE8TxWx6Scn4kK4xx0GWSKJLyj/31ka8uJ4SXhCXnS5THVMMrV0mQoxqj/ImWjaV59i1lWvDpX/u3onE+L6gucId0bJnPFvwu148bKZ1WlTtEPVDsiWy4joGchPHe7sp/meTdApqXJT75LMi4PRmK9aEOaNClivlGq9zHd1sqT7aT7DuYDv5v26z1bB7ITOznlRFfwPEBsr5BCiCw4AAAAASUVORK5CYIIA"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                
                    <!-- Right Section -->
                    <div id="right-section">
                         <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
                    </div>
                </div>
                
                <br/>
                                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Planche photos </p>
                                </div>
                                <br/>

                                <div>
                                <p style="padding-top: 10pt;text-indent: 0pt;text-align: center; border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt">${imagesAA}</p>
                                </div>

                 <br/>
                                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:10.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">HISTORIQUE DES MODIFICATIONS</p>
                                </div>
                                

                                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:80pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p class="s4" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Version du
rapport </p></td>
                <td style="width:190pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Date de
modification</p>
                </td>
                <td style="width:80pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p class="s4" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Nom du correcteur</p></td>
                <td style="width:200pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Commentaire modification</p>
                </td>
                </tr>
                </table>
                <br/>
                  <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">7/8</p>


                 <br/>
                <br/>
                                
                                
                    <div style="display: flex; align-items: center; justify-content: space-between; margin: 10px;">
                    <!-- Left Section -->
                    <div id="left-section">
                        <table border="1" style="border-collapse: collapse;">
                            <tr>
                                <td>
                                    <img width="70" height="67" 
                                        <img width="70" height="67" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABDCAYAAAAh43M3AAACtVBMVEX///////7//v7//v3//f3//fz+/f3+/fz+/Pz++/r++vr++vn++fn9+vn9+fj9+Pf9+Pb99/X89vX89PL88/H78O777+z67er67Oj56+j56OX56OT46OP45+P45uL45uH45eH45OD45N/449/449735N/34dv34Nv34Nr239n23tj13df129X12tT119D019D01s/01s701M3z1c7z0srz0cnyz8fyzsXyzcTxy8LxysDwxrzvxr3vxLnuwbfuwbbuwLXuv7TtvbLtvbHtvLHtu7Dtu6/tuq7tua7st6vstqrrt6vrtanrtajqsaTpsKPprJ3oqpvop5joppfoppbnppfnppbnpZbnpZXnpJTno5PmpJXmo5PmopLmoZHmoJDmoI/mn47ln47lno3lnYzlnYvkm4rkmojkmYjkmYfjmIXjloTjlIHjk4DilILilIHik4Dikn/ikX7hkH3hjnrgjXngjHjgjHfgi3fginXgiXXfinbfiXTfiHPfhnDehG/ehG7egWvdg23dgm3dgmzdgWvdgGrcfmfcfWfcfWbcfGbcfGXcemPbeWHbeGHbeGDadl/adl7adV3ac1vaclrZc1vZcVjZb1bYbVXYbVTYbFPYalDXbFLXalHXalDXaU/XZ03XZkvWZkzWZkvWZUrVZEjVY0jVYkbVYUbVYUXVSSjUYETUSSjURiTTXD/TWTzTRiTSVzrSVjnSVDfRVTfRVDfRVDbRUzXRUjTRUjPRUTPQUDLQUDHQTzDQTi/QTS7PTS3PTC3PSyzPSyvPSivPSirPSSrPSCjPRibOSSrOSSnOSCjORyjORyfORybORibORiXORSXORSTNRSXNRSTNRCTNRCPNQyPNQyLNQiPNQiLNQiHNQSHNQSDNQB/MRCTMQiDMQSDMQR/MQCDMQB/MQB7MPx4vQT24AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAMv0lEQVR4nO1bXahdRxX+1j7n5qdpIkTTWONfbUnibUTT+iJWQaRUKwr2QbH4JCJaBJHik8W/Qn3ywVK0BAVRsA8KWhCNYLFIwQdpgqRCtPgbtaA2piU0N7nn7OXD3jPzrTVr9jn33YHL2Xv2mvU362+v2Veeee/xF/H/YYYuF5hf6/V6AJLm6Lq+HSYAqABSPfT4oQqIiJnzawaY+NkU7jIaaxTEY8RLG3mv2lnEKpamvRlvZVwiTbDCMim8BRMqfgrvKGziJc36NY7HdXihB52lLowr2MGWwsP5ZFXpegqBIy6wvxExz1q4hul7XiZwQ7zFsNoZmaOTr/02uV+NOFBMbBnxUXBpZQ58Sc+0/A5rJObF4NNgPluMFhIJoTLcOM/WlC2ALCvDp/mW4mRE6TU93gub7nCt6uCEeM2XaUPHWaMc4sH4rwTzOgdbTJpXxcYNNwLW5kj7VbBOv6vgw+vtfz1nA2OhH41VtHfMC9HPa+ecFsZsg/7qlp743pO1GyRQVR0RCV3XQ/3m1M6tyyXOvucYZDYvc4sFTnz3l56WXV9wF+sTsjTPV81LHk+/6/Xodu8x+DsoaVpJq9bM7WCCIgW2tWYKl4WbphXhSXMJrnW/BnX2uI60KJTS1s75BnaKGZ5T1RBmFUnPU2Stq+5jvkpsGlUwH5EjK0yoIEqIvVDRfAuu9bzAFN8u8T1ZYL0+Us4UjalhYBMvQwCfj4xIyUtj4ZT8m5mJBWdFcgCz7mUZ5mCYsuDo1CYjxYrwrhwJGs1Hz0vQJV44Kw2KIJ5qAtv//Y88c+87gK4DIfKDA6VHqO75cDGbIwV+AJD5HL/94G2AVnXQVGZcRVPfeOqnsuuGG7VyfbKUdD83ONbxz773jBohiR+FQiASMR4IZvjQfusKTWQUgdAqjry4NZJ5wWhtSr9ljUHS1Zs+EScMPytdWWCsNC1SDMLkFOAUwK6Y+R4vQgtqkqcs095w4QBbmJ3XuBv+64mWIBmYrYmp4he1hRKeZ3ihH0dz6i3fs9ZUkDja6GgX8+r8W6dVKswDQlaAkWnCrXZXUJmeIa/
                            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
                            eQJFZ4OtoTXzETjXAlZ+yarOGach9RxO+2QE14V4dGJVBfVOVPB7QlaXuKPo6rN6VxoKJExthZTSgcIpcQ/7zWJxfDcR0uUbfqI3+kA1oeEij6vdxnJWKX4L6rKTfx1pGfOE/O4vFU0Jak5b0qdcK9RU1lhMSWfy7Cdo78q+HozZEb9zjihc2KQGmTlcNkNzZakvXfvazX/TQZ85RtEq5XPeTemmFxjhydpesVz6ud5soyGN6wxWDFtzQLJldLum5xKv97cPdxk0QKreM5aNE9WYwuwYE1wpt76Kt3xxYpJRddAZAqBruXjjZ1TLwDDR0pmHL7uYZ79xnh8dbZtyyj+XKkgrWOTRV7VLOJuQn6nsk5r2AxTaKpNfSEvNJeXtcsRam65OmZlRet2pFWjpbk1jxp3NlwOnkpeZk7GZa36zLDrs1I9Gm+fw3W4libVuVKrKFw5okJyjDer40UTx0SsmTPU8BtWhhkJ1YAtjZLyUlA0u1vbuZpTRYGqynwDsF9mOtzhfZMX/oomN6iq72myqyvFGEnNbBvB+duY+Yac/PkfGJf/LzLfEZs2R1XVvpfhP9xmOf7oYiEnT58vHxX5/6gDJmsQI6t9gUV7ra3BKMZobQnRf7K1/vWF71tfXkf/wxQzhiYcf0O3E/zM0/TrDgATYwRr+GtR0DoMtf4db72xGjbamFbcYJ7W4MN/GV58faod6K+j96rWjja/4w+rVUunvbaMSOiWldgvw8e/IUHQP4s6i2Htt0yZYbwy/HduHH9sLHIV7wqXagnY2gRPN7b2dN6VC8j50GVLr/BDjJGNDb3w8BdlYmNc9Wl+uQwHXddVKDAeg7hXttkMFx758vBVVp15IoUCtUZ99gphRGTIgCmBpkB75q6jI4FKFjHzOl4M/efyP5NDQ5oYSPfpOZfxRtE8TxWx6Scn4kK4xx0GWSKJLyj/31ka8uJ4SXhCXnS5THVMMrV0mQoxqj/ImWjaV59i1lWvDpX/u3onE+L6gucId0bJnPFvwu148bKZ1WlTtEPVDsiWy4joGchPHe7sp/meTdApqXJT75LMi4PRmK9aEOaNClivlGq9zHd1sqT7aT7DuYDv5v26z1bB7ITOznlRFfwPEBsr5BCiCw4AAAAASUVORK5CYIIA"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                
                    <!-- Right Section -->
                    <div id="right-section">
                         <table border="1" style="border-collapse: collapse;">
            <tr>
                <td>
                    <table style="border-collapse:collapse;margin-left:auto; margin-right: 0;" cellspacing="0">
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Numéro de dossier :</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ2}</p>
                </td>
                </tr>
                <tr style="height:11pt">
                <td style="width:120pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt" bgcolor="#CE4627">
                <p class="s1" style="padding-left: 1pt;text-indent: 0pt;line-height: 10pt;text-align: left;">Référence demandeur:</p></td>
                <td style="width:111pt;border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt" bgcolor="#B4C5E7">
                <p style="text-indent: 0pt;text-align: center; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 8.5pt;">${PGAVQ3}</p>
                </td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
                    </div>
                </div>
                
                <br/>
                                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:47.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">Planche photos </p>
                                </div>
                                <br/>

                                <div>
                                <p style="padding-top: 10pt;text-indent: 0pt;text-align: center; border-top-style:solid;border-top-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt">${imagesAE}</p>
                                </div>

                 <br/>
                                <div style="background:#CE4627;border:1.4pt solid #000000;display:flex;justify-content:center;align-items:center;min-height:10.3pt;width:550.8pt;text-align: center;flex-direction: column;">
                                <p class="s3" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: center;">HISTORIQUE DES MODIFICATIONS</p>
                                </div>
                                

                                <br/>
                <table style="border-collapse:collapse;margin-right: 0;" cellspacing="0">
                <tr style="height:16pt">
                <td style="width:80pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p class="s4" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Version du
rapport </p></td>
                <td style="width:190pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Date de
modification</p>
                </td>
                <td style="width:80pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p class="s4" style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Nom du correcteur</p></td>
                <td style="width:200pt;border-top-style:solid;border-top-width:1pt;border-right-style:solid;border-right-width:1pt; border-left-style:solid;border-left-width:1pt; border-bottom-style:solid;border-bottom-width:1pt; background:#CE4627;">
                <p style="margin: 0;font-weight: bold;font-family: Calibri, sans-serif;font-style: normal;text-align: left; color: #FFF;">Commentaire modification</p>
                </td>
                </tr>
                </table>
                <br/>
                  <p style="text-indent: 0pt;text-align: center;">Les résultats de ce contrôle ne se rapportent qu&#39;aux parties accessibles lors de l&#39;intervention sur site.</p>
                <p class="s6" style="padding-top: 5pt;text-indent: 0pt;text-align: center;">Code document : <span class="s7">INS-047    </span>Version : <span class="s7">V05</span></p>
                <p style="text-indent: 0pt;text-align: left;"><br/></p>
                <p class="s2" style="padding-left: 1pt;text-indent: 0pt;text-align: center;">8/8</p>

</div>


    </body>
    </html>

    
     `;
   }
