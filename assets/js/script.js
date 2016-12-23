function consultaCEP() {
      var xhr = new XMLHttpRequest ();
      xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  //document.getElementById('output').innerHTML = xhr.responseText;
                  var data = JSON.parse (xhr.responseText);
				  
					var dados = ' </br> ' + 
								'Estado: ' + data.estado_info.nome + '/' + data.estado + ' </br> ' +
								'Área Km&sup2;: ' + data.estado_info.area_km2 + ' </br> ' +
								'Código IBGE: ' + data.estado_info.codigo_ibge + ' </br> </br> ' +
								'Cidade: ' + data.cidade + ' </br> ' +
								'Área Km&sup2;: ' + data.cidade_info.area_km2 + ' </br> ' +
								'Código IBGE: ' + data.cidade_info.codigo_ibge;
				  
				  document.getElementById('output').innerHTML = dados;
              }
              else if (xhr.status === 404) {
                  document.getElementById('output').innerHTML = xhr.statusText;
                }
                else 
                  document.getElementById('output').innerHTML = 'Erro desconhecido';
            }
         };
         xhr.open ('GET', 'http://api.postmon.com.br/v1/cep/' + document.getElementById('cep').value);
         xhr.send();
      }