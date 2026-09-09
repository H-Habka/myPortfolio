import * as THREE from "three";

const INK = "#070d14";
const NAVY = "#0b1622";
const SURFACE = "#101c2b";
const RAISED = "#162536";
const PAPER = "#e8f1f8";
const MUTED = "#8aa0b5";
const CYAN = "#3ee0d0";
const SIGNAL = "#5b8cff";
const VIOLET = "#8b7cff";

function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
}

function fillRound(ctx, x, y, w, h, r, fill) {
    roundRect(ctx, x, y, w, h, r);
    ctx.fillStyle = fill;
    ctx.fill();
}

function makeTexture(width, height, draw) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    draw(ctx, width, height);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
}

function paintDashboard(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#122033");
    g.addColorStop(1, INK);
    fillRound(ctx, 0, 0, w, h, 36, g);

    ctx.strokeStyle = "rgba(62, 224, 208, 0.28)";
    ctx.lineWidth = 3;
    roundRect(ctx, 2, 2, w - 4, h - 4, 34);
    ctx.stroke();

    fillRound(ctx, 0, 0, w, 78, 0, "rgba(16, 28, 43, 0.95)");
    ["#ff5f57", "#febc2e", "#28c840"].forEach((color, i) => {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(42 + i * 28, 40, 8, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.fillStyle = MUTED;
    ctx.font = "600 22px 'IBM Plex Mono', monospace";
    ctx.fillText("EasySales  ·  dashboard", 140, 46);

    const cards = [
        { x: 36, y: 110, label: "Web", value: "Next.js", color: CYAN },
        { x: 292, y: 110, label: "Mobile", value: "EasyChat", color: SIGNAL },
        { x: 548, y: 110, label: "Commerce", value: "Shopify", color: VIOLET },
    ];
    cards.forEach((card) => {
        fillRound(ctx, card.x, card.y, 236, 118, 18, RAISED);
        ctx.fillStyle = card.color;
        ctx.font = "500 16px 'IBM Plex Mono', monospace";
        ctx.fillText(card.label.toUpperCase(), card.x + 20, card.y + 36);
        ctx.fillStyle = PAPER;
        ctx.font = "600 28px Outfit, sans-serif";
        ctx.fillText(card.value, card.x + 20, card.y + 80);
    });

    fillRound(ctx, 36, 250, 492, 210, 18, SURFACE);
    ctx.fillStyle = MUTED;
    ctx.font = "500 15px 'IBM Plex Mono', monospace";
    ctx.fillText("SHIPPED SURFACE", 56, 278);

    const bars = [0.42, 0.7, 0.55, 0.88, 0.63, 0.76, 0.5];
    bars.forEach((value, i) => {
        const x = 64 + i * 62;
        const bh = value * 130;
        fillRound(ctx, x, 430 - bh, 36, bh, 8, i % 2 === 0 ? CYAN : SIGNAL);
        ctx.globalAlpha = 0.22;
        fillRound(ctx, x, 300, 36, 130, 8, PAPER);
        ctx.globalAlpha = 1;
    });

    fillRound(ctx, 548, 250, 236, 210, 18, SURFACE);
    ctx.fillStyle = MUTED;
    ctx.font = "500 15px 'IBM Plex Mono', monospace";
    ctx.fillText("STACK", 568, 278);
    ["React", "React Native", "Liquid", "Node"].forEach((row, i) => {
        fillRound(ctx, 568, 300 + i * 36, 196, 28, 8, "rgba(62, 224, 208, 0.08)");
        ctx.fillStyle = PAPER;
        ctx.font = "500 16px Outfit, sans-serif";
        ctx.fillText(row, 582, 320 + i * 36);
        ctx.fillStyle = CYAN;
        ctx.fillRect(568, 300 + i * 36, 4, 28);
    });
}

function paintPhone(ctx, w, h) {
    fillRound(ctx, 0, 0, w, h, 48, INK);
    ctx.strokeStyle = "rgba(91, 140, 255, 0.4)";
    ctx.lineWidth = 4;
    roundRect(ctx, 3, 3, w - 6, h - 6, 46);
    ctx.stroke();

    fillRound(ctx, w / 2 - 52, 22, 104, 18, 10, NAVY);
    ctx.fillStyle = CYAN;
    ctx.font = "600 28px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("EasyChat", w / 2, 86);
    ctx.fillStyle = MUTED;
    ctx.font = "500 16px 'IBM Plex Mono', monospace";
    ctx.fillText("React Native", w / 2, 114);
    ctx.textAlign = "left";

    const bubbles = [
        { x: 28, y: 150, ww: 230, incoming: true },
        { x: 122, y: 230, ww: 210, incoming: false },
        { x: 28, y: 310, ww: 200, incoming: true },
        { x: 90, y: 390, ww: 242, incoming: false },
        { x: 28, y: 470, ww: 176, incoming: true },
    ];
    bubbles.forEach((bubble) => {
        fillRound(
            ctx,
            bubble.x,
            bubble.y,
            bubble.ww,
            58,
            18,
            bubble.incoming ? RAISED : "rgba(62, 224, 208, 0.22)"
        );
        fillRound(
            ctx,
            bubble.x + 16,
            bubble.y + 18,
            bubble.ww * 0.62,
            8,
            4,
            bubble.incoming ? MUTED : PAPER
        );
        fillRound(
            ctx,
            bubble.x + 16,
            bubble.y + 34,
            bubble.ww * 0.38,
            8,
            4,
            bubble.incoming ? "rgba(138, 160, 181, 0.55)" : "rgba(232, 241, 248, 0.5)"
        );
    });

    fillRound(ctx, 28, h - 92, w - 56, 52, 26, SURFACE);
    ctx.fillStyle = MUTED;
    ctx.font = "500 16px Outfit, sans-serif";
    ctx.fillText("Message", 52, h - 60);
    ctx.beginPath();
    ctx.fillStyle = CYAN;
    ctx.arc(w - 56, h - 66, 14, 0, Math.PI * 2);
    ctx.fill();
}

function paintCode(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#0e1a28");
    g.addColorStop(1, INK);
    fillRound(ctx, 0, 0, w, h, 28, g);
    ctx.strokeStyle = "rgba(139, 124, 255, 0.35)";
    ctx.lineWidth = 3;
    roundRect(ctx, 2, 2, w - 4, h - 4, 26);
    ctx.stroke();

    fillRound(ctx, 0, 0, w, 56, 0, "rgba(16, 28, 43, 0.95)");
    ctx.fillStyle = MUTED;
    ctx.font = "600 18px 'IBM Plex Mono', monospace";
    ctx.fillText("ship.ts", 28, 36);
    ctx.fillStyle = CYAN;
    ctx.fillText("● live", w - 110, 36);

    const lines = [
        [VIOLET, "export", PAPER, " function ", CYAN, "ship", PAPER, "() {"],
        [MUTED, "  // EasySales seat — web, mobile, commerce"],
        [SIGNAL, "  const ", PAPER, "ui = ", CYAN, "next", PAPER, ".page()"],
        [SIGNAL, "  const ", PAPER, "app = ", CYAN, "native", PAPER, ".chat()"],
        [SIGNAL, "  return ", CYAN, "liquid", PAPER, ".theme(ui, app)"],
        [PAPER, "}"],
        ["", ""],
        [MUTED, "  solid · owasp · core web vitals"],
    ];

    lines.forEach((parts, i) => {
        let x = 28;
        const y = 96 + i * 34;
        ctx.font = "500 20px 'IBM Plex Mono', monospace";
        for (let p = 0; p < parts.length; p += 2) {
            const color = parts[p];
            const text = parts[p + 1];
            if (!text) continue;
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
            x += ctx.measureText(text).width;
        }
    });
}

function paintStore(ctx, w, h) {
    fillRound(ctx, 0, 0, w, h, 28, NAVY);
    ctx.strokeStyle = "rgba(62, 224, 208, 0.3)";
    ctx.lineWidth = 3;
    roundRect(ctx, 2, 2, w - 4, h - 4, 26);
    ctx.stroke();

    ctx.fillStyle = CYAN;
    ctx.font = "500 16px 'IBM Plex Mono', monospace";
    ctx.fillText("SARAY JEWELLERY", 28, 42);
    ctx.fillStyle = PAPER;
    ctx.font = "600 32px Outfit, sans-serif";
    ctx.fillText("Storefront", 28, 82);

    [0, 1, 2].forEach((i) => {
        fillRound(ctx, 28 + i * 150, 110, 136, 96, 14, SURFACE);
        fillRound(ctx, 40 + i * 150, 122, 112, 52, 8, i === 1 ? "rgba(62,224,208,0.2)" : RAISED);
        fillRound(ctx, 40 + i * 150, 182, 72, 10, 5, MUTED);
    });

    ctx.fillStyle = MUTED;
    ctx.font = "500 16px Outfit, sans-serif";
    ctx.fillText("Shopify  ·  Stripe  ·  Tabby", 28, 240);
}

function paintToken(label, accent) {
    return (ctx, w, h) => {
        fillRound(ctx, 0, 0, w, h, 24, NAVY);
        ctx.strokeStyle = accent;
        ctx.lineWidth = 6;
        roundRect(ctx, 4, 4, w - 8, h - 8, 20);
        ctx.stroke();
        ctx.fillStyle = accent;
        ctx.font = "700 36px 'IBM Plex Mono', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(label, w / 2, h / 2);
    };
}

export function createSceneTextures(mobile) {
    const dash = mobile ? [1024, 640] : [1280, 800];
    const phone = mobile ? [360, 720] : [420, 840];
    const code = mobile ? [768, 420] : [960, 520];
    const store = mobile ? [640, 360] : [768, 420];
    const token = mobile ? 256 : 320;

    const textures = {
        dashboard: makeTexture(dash[0], dash[1], paintDashboard),
        phone: makeTexture(phone[0], phone[1], paintPhone),
        code: makeTexture(code[0], code[1], paintCode),
        store: makeTexture(store[0], store[1], paintStore),
        react: makeTexture(token, token, paintToken("React", CYAN)),
        next: makeTexture(token, token, paintToken("Next", SIGNAL)),
        shop: makeTexture(token, token, paintToken("Shop", VIOLET)),
        node: makeTexture(token, token, paintToken("Node", CYAN)),
    };

    return {
        textures,
        dispose() {
            Object.values(textures).forEach((texture) => texture.dispose());
        },
    };
}
