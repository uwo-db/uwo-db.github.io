function navigation(){
    document.getElementById('navi').innerHTML =` <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
    <ul class="nav-list">
      <li>
        <a href="./d.html">교역품 DB</a>
      </li>
      <li>
        <a href="./timer.html">교역소 갱신 타이머</a>
      </li>
      <li>
        <a href="#!">무역 루트</a>
        <ul class="nav-dropdown">
          <li>
            <a href="./trade/1.html">오스만 삼각 무역</a>
          </li>
          <li>
            <a href="./trade/2.html">우리땅 무역</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#!">항해 시간 계산기</a>
      </li>
    </ul>`;
  }
  
  
  function main_list (){
        document.getElementById('main_list').innerHTML = `  
        <strong>상단 보유항 관세 현황</strong><br>
        <ul class="list-group">
        <li class="list-group-item">카사블랑카<span class="badge">전 국가 5%</span></li>
        <li class="list-group-item">보르사이드<span class="badge">전 국가 5%</span></li>
        <li class="list-group-item">다음 주는 카리브, 아프리카 쪽 공략합시다.</span></li>
        </ul>

        <strong>세부 시세표</strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./trade/caviar.html">캐비아</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/civet.html">시벳</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/perfume.html">향수</a><span class="badge">by 생강공원</span></li>
          <li class="list-group-item"><a href="./trade/daffodil.html">수선화</a><span class="badge">by 생강공원</span></li>
        </ul>

        <strong>데이터 베이스 현황</strong><br>
        <ul class="list-group">
          <li class="list-group-item"><a href="./d.html">교역소 DB</a><span class="badge">ㄱ-ㄷ</span></li>
          <li class="list-group-item"><a href="./timer.html">교역소 갱신 시간</a><span class="badge">13</span></li>
          <li class="list-group-item">무역 루트<span class="badge">1</span></li>
        </ul>
        
        `;
  }