export default function RoyaltyPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* ================= HEADER ================= */}
        <header className="mb-20">
          <p className="mb-2 text-sm font-semibold tracking-wider text-indigo-400">
            AI · BRAND ANALYSIS
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-100">
            Royalty-AI – 상표 유사도 분석 및 위험 감지 서비스
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400">
            상표 이미지와 상호명을 기반으로
            시각적·의미적 유사도를 분석해
            상표 침해 가능성을 사전에 감지하는 AI 기반 브랜드 보호 서비스입니다.
          </p>
        </header>
        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800" />


        {/* ================= 프로젝트 개요 ================= */}
        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
              프로젝트 개요
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              기존 상표 검색 서비스는
              키워드 기반 조회에 의존해
              실제 상표 간의 시각적·의미적 유사성을
              정량적으로 판단하기 어렵다는 한계가 있었습니다.
              <br /><br />
              Royalty-AI는
              <strong className="text-slate-300">
                {" "}이미지 + 텍스트 기반 AI 분석
              </strong>
              을 통해
              상표 침해 가능성을 사전에 감지하고,
              이를 안전하게 관리하기 위한
              프로젝트입니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-6">
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">개발 기간</span><br />
                2025.01.08 ~ 2026.02.05
              </li>
              <li>
                <span className="text-slate-400">기술 스택</span><br />
                Spring Boot · JWT · AI 연동
              </li>
              <li>
                <span className="text-slate-400">담당 역할</span><br />
                  상표·로고 분석 엔진 설계 · 
                  유사도 산출 로직 정의 · 
                  Risk Level 기준 수립 · 
                  분석 결과 구조화 및 기준 데이터 설계
              </li>
            </ul>
          </div>
        </section>
              {/* ================= 상표 등록 기능 ================= */}  
               <section className="mb-24">
          <h2 className="mb-6 text-xl font-semibold text-slate-100">
             상표·로고 등록 기능
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            <p>
            •  사용자가 상표명과 로고 이미지를 등록하면
               분석 기준 데이터로 저장되도록 설계했습니다.
            </p>

            <p>
              • 입력 데이터는 이후 유사도 분석,
                위험도 판단, 감시 시스템의 기준값으로 활용됩니다.
            </p>

            <p>
              •   단순 저장이 아닌,
                  분석 로직과 연결되는 구조로 데이터 모델을 설계했습니다.
            </p>

      
          </div>
        </section>

       {/* ================= 유사도 분석 엔진 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            상표 종합 분석 기능 
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            사용자가 상표명, 로고 이미지, 업종을 입력하면
            이를 기반으로 유사 상표를 탐색하고
            종합 유사도 점수를 산출하도록 설계했습니다.
          </p>

      

          <img
            src="/images/Royalty/캡처.PNG"
            alt="상표분석"
            className="rounded-xl border border-slate-800"
          />
        </section>

       {/* ================= 분석 결과 구조화 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
           유사 상표 결과 구조화
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
          분석 결과는 유사도 점수를 기준으로 정렬되며,
          각 결과에는 상표명, 유사도 %, 출원인 정보가 포함됩니다.
          </p>

          <img
            src="/images/Royalty/상표분석.PNG"
            alt="Royalty 상표분석"
            className="rounded-xl border border-slate-800"
          />
        </section>
         {/* ================= AI 정밀 분석 구조화 ================= */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
             AI 정밀 진단 리포트 설계
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
          분선택된 상표에 대해 GPT 기반 분석을 수행하고,
         유사 원인과 침해 가능성을 자연어로 정리하도록 설계했습니다.
          </p>

          <img
            src="/images/Royalty/ai 분석.PNG"
            alt="Royalty 상표분석"
            className="rounded-xl border border-slate-800"
          />
        </section>


        {/* ================= 마무리 ================= */}
        <footer className="border-t border-slate-800 pt-10 text-sm text-slate-400">
          Royalty-AI는 단순한 로그인 기능 구현이 아닌,
          실제 서비스 운영을 고려한
          인증·보안·확장성을 함께 설계한
          실무 중심 백엔드 프로젝트입니다.
        </footer>

      </div>
    </main>
  )
}
