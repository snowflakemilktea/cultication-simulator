(()=>{
	const ElixirRarity = {
		COMMON: {
			name: {
				en: "Common",
				pt: "Comum",
				zh: "普通"
			},
			point: 1,
			item_background: ["#ffffff", "#c8c8c8"],
			item_border: "#595959"
		},
		GOOD: {
			name: {
				en: "Good",
				pt: "Bom",
				zh: "优秀"
			},
			point: 2,
			item_background: ["#d0ff80", "#a3c764"],
			item_border: "#3a5900"
		},
		STURDY: {
			name: {
				en: "Sturdy",
				pt: "Robusto",
				zh: "精良"
			},
			point: 3,
			item_background: ["#34ffff", "#25b6b6"],
			item_border: "#176c69"
			
		},
		RARE: {
			name: {
				en: "Rare",
				pt: "Raro",
				zh: "稀有"
			},
			point: 4,
			item_background: ["#2af598", "#34bc78"],
			item_border: "#185e13"
			
		},
		PERFECT: {
			name: {
				en: "Perfect",
				pt: "Perfeito",
				zh: "完美"
			},
			point: 5,
			item_background: ["#3dc2ff", "#3d97d1"],
			item_border: "#145959"
		},
		SCARCE: {
			name: {
				en: "Scarce",
				pt: "Escasso",
				zh: "珍稀"
			},
			point: 6,
			item_background: ["#e5ceff", "#f89bff"],
			item_border: "#713e84"
			
		},
		EPIC: {
			name: {
				en: "Epic",
				pt: "Épico",
				zh: "史诗"
			},
			point: 8,
			item_background: ["#ffe796", "#ffa82e"],
			item_border: "#865300"
			
		},
		LEGENDARY: {
			name: {
				en: "Legendary",
				pt: "Lendário",
				zh: "传奇"
			},
			point: 10,
			item_background: ["#b987ff", "#935dde"],
			item_border: "#4d2a59"
			
		},
		IMMORTAL: {
			name: {
				en: "Immortal",
				pt: "Imortal",
				zh: "不朽"
			},
			point: 14,
			item_background: ["#ff84f8", "#d659c5"],
			item_border: "#6d3368"
			
		},
		MYTH: {
			name: {
				en: "Myth",
				pt: "Mito",
				zh: "神话"
			},
			point: 20,
			item_background: ["#ffb957", "#e17a3e"],
			item_border: "#593f1e"
			
		},
		ETERNAL: {
			name: {
				en: "Eternal",
				pt: "Eterno",
				zh: "永恒"
			},
			point: 28,
			item_background: ["#fcff5e", "#f7c81d"],
			item_border: "#5d4e00"
			
		},
		CELESTIAL: {
			name: {
				en: "Celestial",
				pt: "Celestial",
				zh: "神祇"
			},
			point: undefined
			
		}
	};
	const ElixirType = {
		HP: {
			name: {
				en: "HP",
				pt: "HP",
				zh: "生命值"
			}
		},
		ATTACK: {
			name: {
				en: "Attack",
				pt: "Atacar",
				zh: "攻击力"
			}
		},
		CRITICAL_HIT_DAMAGE: {
			name: {
				en: "Critical Hit Damage",
				pt: "Dano de Golpe Crítico",
				zh: "爆击伤害"
			}
		},
		SKILL_DAMAGE: {
			name: {
				en: "Skill Damage",
				pt: "Dano de Habilidade",
				zh: "技能伤害"
			}
		},
		TALISMAN_DAMAGE: {
			name: {
				en: "Talisman Damage",
				pt: "Dano do Talismã",
				zh: "法宝伤害"
			}
		}	
	};
	const Elixir = [
		{
			key: "a11",
			rarity: ElixirRarity.ETERNAL,
			type: ElixirType.ATTACK,
			asset: "eternal_atk.png"
		},
		{
			key: "c11",
			rarity: ElixirRarity.ETERNAL,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "eternal_crt.png"
		},
		{
			key: "t11",
			rarity: ElixirRarity.ETERNAL,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "eternal_tal.png"
		},
		{
			key: "h11",
			rarity: ElixirRarity.ETERNAL,
			type: ElixirType.HP,
			asset: "eternal_hp.png"
		},
		{
			key: "s11",
			rarity: ElixirRarity.ETERNAL,
			type: ElixirType.SKILL_DAMAGE,
			asset: "eternal_ski.png"
		},
		{
			key: "a10",
			rarity: ElixirRarity.MYTH,
			type: ElixirType.ATTACK,
			asset: "18126456519.webp"
		},
		{
			key: "c10",
			rarity: ElixirRarity.MYTH,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126454082.webp"
		},
		{
			key: "t10",
			rarity: ElixirRarity.MYTH,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18104154115.webp"
		},
		{
			key: "h10",
			rarity: ElixirRarity.MYTH,
			type: ElixirType.HP,
			asset: "18104138888.webp"
		},
		{
			key: "s10",
			rarity: ElixirRarity.MYTH,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104130577.webp"
		},
		{
			key: "a9",
			rarity: ElixirRarity.IMMORTAL,
			type: ElixirType.ATTACK,
			asset: "18126456794.webp"
		},
		{
			key: "c9",
			rarity: ElixirRarity.IMMORTAL,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126454316.webp"
		},
		{
			key: "t9",
			rarity: ElixirRarity.IMMORTAL,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18104154311.webp"
		},
		{
			key: "h9",
			rarity: ElixirRarity.IMMORTAL,
			type: ElixirType.HP,
			asset: "18104139025.webp"
		},
		{
			key: "s9",
			rarity: ElixirRarity.IMMORTAL,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104130738.webp"
		},
		{
			key: "a8",
			rarity: ElixirRarity.LEGENDARY,
			type: ElixirType.ATTACK,
			asset: "18126457042.webp"
		},
		{
			key: "c8",
			rarity: ElixirRarity.LEGENDARY,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126454585.webp"
		},
		{
			key: "t8",
			rarity: ElixirRarity.LEGENDARY,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126452381.webp"
		},
		{
			key: "h8",
			rarity: ElixirRarity.LEGENDARY,
			type: ElixirType.HP,
			asset: "18104146156.webp"
		},
		{
			key: "s8",
			rarity: ElixirRarity.LEGENDARY,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104130900.webp"
		},
		{
			key: "a7",
			rarity: ElixirRarity.EPIC,
			type: ElixirType.ATTACK,
			asset: "18126457310.webp"
		},
		{
			key: "c7",
			rarity: ElixirRarity.EPIC,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126454843.webp"
		},
		{
			key: "t7",
			rarity: ElixirRarity.EPIC,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126452605.webp"
		},
		{
			key: "h7",
			rarity: ElixirRarity.EPIC,
			type: ElixirType.HP,
			asset: "18104146317.webp"
		},
		{
			key: "s7",
			rarity: ElixirRarity.EPIC,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104131091.webp"
		},
		{
			key: "a6",
			rarity: ElixirRarity.SCARCE,
			type: ElixirType.ATTACK,
			asset: "18126457588.webp"
		},
		{
			key: "c6",
			rarity: ElixirRarity.SCARCE,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126455059.webp"
		},
		{
			key: "t6",
			rarity: ElixirRarity.SCARCE,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126452825.webp"
		},
		{
			key: "h6",
			rarity: ElixirRarity.SCARCE,
			type: ElixirType.HP,
			asset: "18104146488.webp"
		},
		{
			key: "s6",
			rarity: ElixirRarity.SCARCE,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104131276.webp"
		},
		{
			key: "a5",
			rarity: ElixirRarity.PERFECT,
			type: ElixirType.ATTACK,
			asset: "18126457799.webp"
		},
		{
			key: "c5",
			rarity: ElixirRarity.PERFECT,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126455299.webp"
		},
		{
			key: "t5",
			rarity: ElixirRarity.PERFECT,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126453086.webp"
		},
		{
			key: "h5",
			rarity: ElixirRarity.PERFECT,
			type: ElixirType.HP,
			asset: "18104146667.webp"
		},
		{
			key: "s5",
			rarity: ElixirRarity.PERFECT,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104131447.webp"
		},
		{
			key: "a4",
			rarity: ElixirRarity.RARE,
			type: ElixirType.ATTACK,
			asset: "18126458030.webp"
		},
		{
			key: "c4",
			rarity: ElixirRarity.RARE,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126455670.webp"
		},
		{
			key: "t4",
			rarity: ElixirRarity.RARE,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126453303.webp"
		},
		{
			key: "h4",
			rarity: ElixirRarity.RARE,
			type: ElixirType.HP,
			asset: "18104146797.webp"
		},
		{
			key: "s4",
			rarity: ElixirRarity.RARE,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104138111.webp"
		},
		{
			key: "a3",
			rarity: ElixirRarity.STURDY,
			type: ElixirType.ATTACK,
			asset: "18126458309.webp"
		},
		{
			key: "c3",
			rarity: ElixirRarity.STURDY,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126455976.webp"
		},
		{
			key: "t3",
			rarity: ElixirRarity.STURDY,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126453496.webp"
		},
		{
			key: "h3",
			rarity: ElixirRarity.STURDY,
			type: ElixirType.HP,
			asset: "18104146948.webp"
		},
		{
			key: "s3",
			rarity: ElixirRarity.STURDY,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104138267.webp"
		},
		{
			key: "a2",
			rarity: ElixirRarity.GOOD,
			type: ElixirType.ATTACK,
			asset: "18126458698.webp"
		},
		{
			key: "c2",
			rarity: ElixirRarity.GOOD,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126456127.webp"
		},
		{
			key: "t2",
			rarity: ElixirRarity.GOOD,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126453619.webp"
		},
		{
			key: "h2",
			rarity: ElixirRarity.GOOD,
			type: ElixirType.HP,
			asset: "good_hp.png"
		},
		{
			key: "s2",
			rarity: ElixirRarity.GOOD,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104138490.webp"
		},
		{
			key: "a1",
			rarity: ElixirRarity.COMMON,
			type: ElixirType.ATTACK,
			asset: "18126458862.webp"
		},
		{
			key: "c1",
			rarity: ElixirRarity.COMMON,
			type: ElixirType.CRITICAL_HIT_DAMAGE,
			asset: "18126456335.webp"
		},
		{
			key: "t1",
			rarity: ElixirRarity.COMMON,
			type: ElixirType.TALISMAN_DAMAGE,
			asset: "18126453811.webp"
		},
		{
			key: "h1",
			rarity: ElixirRarity.COMMON,
			type: ElixirType.HP,
			asset: "18104153945.webp"
		},
		{
			key: "s1",
			rarity: ElixirRarity.COMMON,
			type: ElixirType.SKILL_DAMAGE,
			asset: "18104138711.webp"
		}
	];
	
	function loadTable(table, default_value = null) {
		let data = localStorage.getItem(table);
		if(data) return JSON.parse(data);
		return default_value;
	}
	function saveTable(table, value) {
		localStorage.setItem(table, JSON.stringify(value));
	}
	
	let elixirInventory = loadTable("elixir", {});
	let elixirPoint = 0
	function calcPoint() {
		elixirPoint = 0;
		for(var id in Elixir) {
			elixirPoint += Elixir[id].rarity.point * (elixirInventory[Elixir[id].key] | 0);
		}
		
		$("#point").html(elixirPoint.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
		calcSolver();
	}
	let $solverInput;
	let $solverError;
	let solverOptionType = {};
	let $$elixirSolverResult = {};
	function calcSolver() {
		let solverTarget = parseInt($solverInput.val()) | 0;
		let result = null;
		$solverError.text("");
		
		let selectedType = [];
		for(var i in solverOptionType) {
			if(solverOptionType[i]) selectedType.push(ElixirType[i]);
		}
		
		if(solverTarget > 0) {
			let model = {
				optimize: {
					c: "min"
				},
				constraints: {
					"point": {"min": solverTarget }
				},
				variables: {},
				ints: {}
			};
			for(var id in Elixir) {
				const elixir = Elixir[id];
				if(!selectedType.includes(elixir.type)) continue;
				
				model.constraints[elixir.key] = {max: elixirInventory[elixir.key] | 0};
				model.variables[elixir.key] = {point: elixir.rarity.point};
				model.variables[elixir.key][elixir.key[0]] = 1;
				model.variables[elixir.key][elixir.key] = 1;
				model.ints[elixir.key] = 1;
			}
			result = solver.Solve(model).midpoint;
			
			if(result.feasible === false) result = false;
		}
		let selectedPoint = 0;
		for(var id in Elixir) {
			const elixir = Elixir[id];
			
			if(result === false)
				if(selectedType.includes(elixir.type)) {
					selectedPoint += Elixir[id].rarity.point * (elixirInventory[elixir.key] | 0);
					if((elixirInventory[elixir.key] | 0) === 0) $$elixirSolverResult[elixir.key].text("");
					else $$elixirSolverResult[elixir.key].text(elixirInventory[elixir.key] | 0);
				} else $$elixirSolverResult[elixir.key].text("");
			else if(result === null) $$elixirSolverResult[elixir.key].text("");
			else {
				if(result[elixir.key]) {
					selectedPoint += Elixir[id].rarity.point * result[elixir.key];
					$$elixirSolverResult[elixir.key].text(result[elixir.key]);
				} else $$elixirSolverResult[elixir.key].text("");
			}
		}
		$("#sel-point").html(selectedPoint.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
		if(selectedPoint<solverTarget) $solverError.text("Not enough elixir (Missing: "+(solverTarget-selectedPoint)+"pts).");
	}
	
	$(function() {
		let $list = $("<elixir-list>");
		
		for(let i in Elixir) ((elixir)=>{
			$("<elixir>").append(
				$("<img>",{src: "./images/"+elixir.asset}),
				$("<input>",{value: elixirInventory[elixir.key] | 0}).on("input change", function(e) {
					const intVal = parseInt($(this).val());
					
					if(e.type === "change") $(this).val(intVal | 0);
					else if(""+intVal !== $(this).val()) return;
					
					elixirInventory[elixir.key] = intVal;
					calcPoint();
					saveTable("elixir", elixirInventory);
				}),
				$$elixirSolverResult[elixir.key] = $("<label>")
			).appendTo($list).css("border", "2px solid "+elixir.rarity.item_border).css("background","linear-gradient("+elixir.rarity.item_background.join(",")+")");
		})(Elixir[i]);
		
		let $sidebar = $("<sidebar>");
		let $elixirType = $("<toggle-list>");
		$("<block>").append(
			$("<line>").append($("<key>",{text:"Total Points"}), $("<value>",{id:"point",text:"0"}))
		).appendTo($sidebar);
		$("<header>").text("Elixir Auto Selector").appendTo($sidebar);
		$("<block>").append(
			$("<label>",{text:"Target Points"}),
			$solverInput = $("<input>",{value:"0"}).on("input change", function(e) {
				const intVal = parseInt($(this).val());
					
				if(e.type === "change") $(this).val(intVal | 0);
				else if(""+intVal !== $(this).val()) return;
				
				calcSolver();
			}),
			$("<label>",{text:"Elixir Type"}),
			$elixirType,
			$("<line>").append($("<key>",{text:"Selected Points"}), $("<value>",{id:"sel-point",text:"0"})),
			$solverError = $("<div>").css("color","#CC0000").css("font-size","16px").css("margin-top","4px")
		).appendTo($sidebar);
		
		for(let i in ElixirType) ((type)=>{
			solverOptionType[type] = type!=="HP";
			$("<toggle>",{text:ElixirType[type].name.en, class:type!=="HP"?"active":""}).appendTo($elixirType).on("click", function() {
				solverOptionType[type] = !solverOptionType[type];
				if(solverOptionType[type]) $(this).addClass("active");
				else $(this).removeClass("active");
				
				calcSolver();
			});
		})(i);
		
		
		
		$(document.body).append($list, $sidebar);
		calcPoint();
	});
})();