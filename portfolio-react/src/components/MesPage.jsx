export default function MesPage() {
  return (
    <main className="bg-[#020617] min-h-screen pt-28 pb-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* 헤더 */}
        <header className="mb-20">
          <p className="mb-2 text-sm font-semibold tracking-wider text-emerald-400">
            MANUFACTURING · MES
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-100">
            음료 제조 공정 MES 시스템
          </h1>
          <p className="max-w-3xl text-base font-medium leading-relaxed text-slate-200">
            중소 제조 현장의 생산 공정을 디지털화하기 위해 설계한 MES 시스템입니다.
            수기 관리로 인해 발생하던 데이터 누락과 공정 불일치 문제를 해결하고,
            생산·품질·기준 데이터를 하나의 흐름으로 통합 관리할 수 있도록
            대시보드 중심으로 구현했습니다.
          </p>
        </header>

        {/* 대표 이미지 (비워둔 상태 유지) */}
        <section className="mb-24 overflow-hidden rounded-2xl border border-slate-800" />

        {/* 프로젝트 개요 */}
        <section className="mb-24 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-slate-100">
              프로젝트 개요
            </h2>
            <p className="text-sm font-medium leading-relaxed text-slate-300">
              기존 음료 제조 현장에서는 생산 계획, 공정 진행 상황,
              품질 데이터를 수기로 관리하고 있어
              데이터 누락과 공정 정합성 문제가 빈번하게 발생했습니다.
              <br /><br />
              본 프로젝트는 생산·공정·품질 데이터를 통합 관리하는
              MES 시스템을 구축하여,
              실시간 현황 파악과 이력 추적이 가능하도록 설계되었습니다.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900/70 p-6">
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <span className="text-slate-400">개발 기간</span><br />
                2025.10.02 ~ 2025.10.28 (4주)
              </li>
              <li>
                <span className="text-slate-400">기술 스택</span><br />
                Spring MVC · Oracle · MyBatis
              </li>
              <li>
                <span className="text-slate-400">담당 역할</span><br />
                백엔드 설계 · DB 모델링 · 공정/품질 로직 구현
              </li>
            </ul>
          </div>
        </section>

        {/* 유스케이스 + ERD */}
        <section className="mb-24">
          <h2 className="mb-8 text-xl font-semibold text-slate-100">
            시스템 구조 & 데이터 설계
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <img
                src="/images/mes/유스케이스.png"
                alt="MES 유스케이스 다이어그램"
                className="w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800">
              <img
                src="/images/mes/ERD.png"
                alt="MES ERD"
                className="w-full object-cover"
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm font-medium leading-relaxed text-slate-300">
            관리자, 현장 관리자, 작업자 역할을 기준으로 기능 접근을 분리했으며,
            생산·품질·불량 데이터가 공정 흐름을 따라 유기적으로 연결되도록
            ERD를 설계했습니다.
            이를 통해 생산 이력 추적과 불량 원인 분석이 가능하도록 구성했습니다.
          </p>
        </section>

        {/* 기능별 화면 */}
        <section className="mb-24 space-y-20">
           {/* 실적 등록 & 조회 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">
              생산 실적 등록 & 조회
            </h3>
            
            <div className="grid gap-10 md:grid-cols-2">
               <div className="overflow-hidden rounded-xl border border-slate-800">
            <img
              src="/images/mes/실적 등록.png"
              alt="MES 실적 등록"
              className="mb-4 w-full rounded-xl border border-slate-800"
              />
               </div>
            <div className="overflow-hidden rounded-xl border border-slate-800">
            <img
              src="/images/mes/실적 조회.png"
              alt="MES 실적 조회"
              className="mb-4 w-full rounded-xl border border-slate-800"
              />
           </div>
              
          </div>
            <p className="text-sm font-medium leading-relaxed text-slate-300">
             생산지시를 기반으로 작업 실적을 등록하고, 기간 및 품목 기준으로 조회할 수 있도록 설계했습니다.
              실적 등록 시 재고 흐름과 연동되도록 구성하여
              생산 데이터가 단순 기록이 아닌 재고 변동의 기준 데이터가 되도록 설계했습니다.
              트랜잭션 처리를 통해 데이터 정합성을 유지했습니다.
            </p>
          </div>



          {/* 입고 출고 등록 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">
              입고 등록 & 출고 등록 
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <img
                src="/images/mes/입고 등록.png"
                alt="입고 등록"
                className="rounded-xl border border-slate-800"
              />
              <img
                src="/images/mes/출고등록.png"
                alt="출고 등록"
                className="rounded-xl border border-slate-800"
              />
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">
               LOT 단위 재고 관리 구조를 설계하여 입고 시 수량 증가,
              출고 시 수량 차감이 자동 반영되도록 구현했습니다.
              재고 부족 시 예외 처리 로직을 적용해 음수 재고가 발생하지 않도록 설계했습니다.
              모든 재고 변동은 INVENTORY_TRANSACTION 테이블에 기록되도록 통합 관리했습니다.
            </p>
          </div>

          {/* 입출고 이력 & 재고 현황 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">
             입출고 이력 & 재고 현황
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <img
                src="/images/mes/입출고 이력.png"
                alt="입출고 이력"
                className="rounded-xl border border-slate-800"
              />
              <img
                src="/images/mes/재고현황.png"
                alt="재고 현황"
                className="rounded-xl border border-slate-800"
              />
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-300">
             입고·출고 데이터를 하나의 거래 이력 구조로 통합 설계하여
              날짜, 유형 기준 필터 조회가 가능하도록 구현했습니다.
              현재 재고는 누적 거래 데이터를 기반으로 계산되는 구조로 설계하여
              데이터 일관성을 유지했습니다.
            </p>
          </div>
        </section>

        {/* 마무리 */}
        <footer className="border-t border-slate-800 pt-10 text-sm font-medium text-slate-300">
          본 MES 프로젝트는 단순 CRUD 구현이 아닌,
          실제 제조 현장의 업무 흐름과 데이터 정합성을 중심으로 설계한
          실무 중심 생산 관리 시스템입니다.
        </footer>
      </div>
    </main>
  )
}
