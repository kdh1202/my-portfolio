import { useNavigate } from "react-router-dom"

export default function FeaturedProjects() {
  const navigate = useNavigate()

  return (
    <section className="bg-[#020617] py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* 헤더 */}
        <h2 className="mb-3 text-4xl font-bold text-slate-100">
          Featured Projects
        </h2>
        <p className="mb-14 max-w-3xl text-base leading-relaxed text-slate-400">
          현장의 불편함을 기술로 개선한 기록들입니다.
          단순 구현을 넘어 성능 최적화와 트러블슈팅 과정을
          중점적으로 담았습니다.
        </p>

        {/* 상단 2개 */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* MES */}
          <article
            onClick={() => navigate("/projects/mes")}
            aria-label="MES 프로젝트 상세 보기"
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
          >
           <img
              src="/images/mes/재고현황.png"
              alt="MES Dashboard"
            />
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                음료 제조 공정 MES 시스템
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                중소 제조 현장의 생산 공정을 디지털화하기 위해 설계한 MES 시스템입니다.
                공정 데이터 누락과 불일치 문제를 해결하고, 대시보드 중심으로
                공정 흐름을 한눈에 파악할 수 있도록 구현했습니다.
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                  2025.10.02 ~ 2025.10.28
                </span>
                <span className="rounded-full bg-emerald-900/40 px-3 py-1 text-emerald-300">
                  Spring MVC · Oracle · MyBatis
                </span>
              </div>

              <span className="text-xs text-emerald-400">
                자세히 보기 →
              </span>
            </div>
          </article>

          {/* EquipGuard */}
          <article
            onClick={() => navigate("/projects/EquipGuard")}
            aria-label="Equip Guard 프로젝트 상세 보기"
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
          >
           <img
  src="/images/EquipGuard/설비 고장 예측.PNG"
  alt="설비 고장 예측 대시보드"
/>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                EquipGuard - 설비 고장 예측 시스템
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                산업 설비의 센서 데이터를 수집·저장·분석하여
                고장 발생 가능성을 사전에 예측하는 AI 기반 설비 관리 시스템입니다.
                Java(Spring Boot) 기반 백엔드에서 데이터 파이프라인과 API를 설계하고,
                Python 기반 머신러닝 모델과 연동해 예측 결과를 서비스로 제공했습니다.
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                  2025.12.23 ~ 2026.01.08
                </span>
                <span className="rounded-full bg-sky-900/40 px-3 py-1 text-sky-300">
                    Java · Spring Boot · FastAPI · Python · ML 
                </span>
              </div>

              <span className="text-xs text-sky-400">
                자세히 보기 →
              </span>
            </div>
          </article>
        </div>

        {/* 하단 1개 */}
      <article
  onClick={() => navigate("/projects/royalty")}
  aria-label="Royalty 프로젝트 상세 보기"
  className="group mt-12 cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
>
          <div className="grid md:grid-cols-2">
           <img
  src="/images/Royalty/상표분석.PNG"
  alt="상표 AI 유사도 분석 결과 화면"
  className="h-full min-h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
/>
            <div className="p-7">
              <h3 className="mb-2 text-lg font-semibold text-white">
                상표 AI 통합 진단 서비스
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">
                텍스트 및 이미지 기반 상표 유사도를 분석해
                상표 침해 가능성을 진단하는 AI 서비스입니다.
                실제 등록 상표 데이터를 기준으로 실무 활용성을 높였습니다.
              </p>

              <div className="mb-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                  2025.01.08 ~ 2026.02.05 
                </span>
                <span className="rounded-full bg-indigo-900/40 px-3 py-1 text-indigo-300">
                  React · Spring Boot · AI
                </span>
              </div>

              <span className="text-xs text-indigo-400">
                자세히 보기 →
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
