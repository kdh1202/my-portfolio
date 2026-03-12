export default function CarwhyPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* =====================
            헤더
        ===================== */}
        <header className="mb-20">
          <p className="mb-2 text-sm font-semibold tracking-wider text-sky-400">
             AI · PREDICTIVE MAINTENANCE
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-100">
             EquipGuard - AI 기반 설비 고장 예측 시스템
          </h1>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-slate-200">
           설비 센서 데이터를 기반으로 이상 징후를 탐지하고
            고장 발생 가능성을 사전에 예측하는 AI 예지보전 시스템입니다.
            실시간 데이터 분석을 통해 다운타임을 최소화하고
            유지보수 비용을 절감하는 것을 목표로 개발되었습니다.
          </p>
        </header>

        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800" />

          {/* =====================
            프로젝트 개요
        ===================== */}
        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
              프로젝트 개요
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-300">
              산업 현장에서는 설비 고장을 사전에 감지하지 못해
              갑작스러운 생산 중단과 비용 손실이 발생합니다.
              <br /><br />
              EquipGuard는 설비의 온도, 진동, 전류 등
              센서 데이터를 수집하여
              <span className="text-slate-200 font-semibold">
                 {" "}이상 탐지 → 고장 확률 예측 → 위험도 시각화
              </span>
              과정을 자동화하여
              예방 정비 의사결정을 지원합니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-6">
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">개발 기간</span><br />
                2025.12.23 ~ 2026.01.08 (2주)
              </li>
              <li>
                <span className="text-slate-400">기술 스택</span><br />
                FastAPI · Python ·Java Spring· Machine Learning 
              </li>
              <li>
                <span className="text-slate-400">담당 역할</span><br />
               데이터 전처리 · 모델 학습 · API 설계 · 예측 로직 구현
              </li>
            </ul>
          </div>
        </section>

        {/* =====================
            메인 서비스 화면
        ===================== */}
         <h2 className="mb-4 text-xl font-semibold text-slate-100">
            설비 모니터링
          </h2>
           <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            전체 설비 현황을 한눈에 확인할 수 있는 통합 대시보드입니다.
           설비별 고장 확률과 상태(정상 · 주의 · 긴급)를
           시각적으로 제공하여 즉각적인 판단이 가능하도록 구성했습니다.
          </p>
        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800">
          <img
            src="/images/EquipGuard/설비 고장 예측.PNG"
            alt="EquipGuard 설비 고장 예측 화면"
            className="w-full object-cover"
          />
          
        </section>

      

        {/* =====================
            사고 판단
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
             설비 관리 시스템
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            등록된 설비를 테이블 기반으로 관리할 수 있습니다.
            설비 ID, 상태, 고장 확률을 확인할 수 있으며
            검색 및 상태 필터 기능을 통해
            운영 효율성을 높였습니다.
          </p>

          <img
            src="/images/EquipGuard/설비관리.PNG"
            alt="설비 관리"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            파손 부위 분석
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            설비 등록 및 데이터 입력
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
            새로운 설비를 등록하고
            예측에 필요한 센서 데이터를 직접 입력할 수 있습니다.
            입력 즉시 AI 모델에 전달되어
            고장 확률 분석에 활용됩니다.
          </p>

          <img
            src="/images/EquipGuard/설비추가.PNG"
            alt="설비추가"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            주행 가능 판단
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            AI 고장 예측 실행
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
           설비를 선택한 후 예측을 실행하면
            머신러닝 기반 모델이 고장 발생 확률을 계산합니다.
            예측 결과는 위험도 등급으로 분류되어
            우선 점검 설비를 빠르게 파악할 수 있습니다.
          </p>

          <img
            src="/images/EquipGuard/고장예측.PNG"
            alt="고장예측"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            종합 분석
        ===================== */}
        <section className="mb-24">
          <h2 className="mb-4 text-xl font-semibold text-slate-100">
            예측 결과 및 대응 가이드
          </h2>
          <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300">
           고장 확률(%)과 위험도 등급을 시각적으로 제공하며,
            AI 기반 분석 결과를 통해
            사전 점검 여부와 유지보수 방향을 제안합니다.
            이를 통해 비계획 정지를 줄이고
            선제적 대응이 가능하도록 설계했습니다.
          </p>

          <img
            src="/images/EquipGuard/고장예측 실행.PNG"
            alt="고장 예측 실행"
            className="rounded-xl border border-slate-800"
          />
        </section>

        {/* =====================
            마무리
        ===================== */}
        <footer className="border-t border-slate-800 pt-10 text-sm font-medium text-slate-300">
          EquipGuard는 단순 데이터 시각화를 넘어,
          AI 기반 고장 확률 예측을 통해
          실제 산업 현장에서 활용 가능한
          예지보전 시스템을 구현한 프로젝트입니다.
        </footer>

      </div>
    </main>
  )
}
