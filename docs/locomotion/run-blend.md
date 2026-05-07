---
title: 跑步混合树方案
sidebar_position: 1
tags: [locomotion, blend-tree, run]
---

# 跑步混合树方案

## 概述

使用 BlendSpace 1D 实现基于速度的跑步动画混合，覆盖 idle → walk → run → sprint 的平滑过渡。

## 实现步骤

1. 创建 BlendSpace 1D，轴设置为 Speed (0 ~ 600)
2. 在 AnimGraph 中添加 BlendSpace Player 节点
3. 从 Character Movement Component 获取速度值传入

## 蓝图截图

{/* 将截图放在 static/img/kb/ 目录下，然后引用 */}

![跑步混合树节点图](/img/kb/locomotion-run-blend-example.png)

## 视频演示

{/* 方式一：嵌入 B 站视频 */}

<iframe src="https://player.bilibili.com/player.html?bvid=BVxxxxxxxxx" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>

{/* 方式二：嵌入本地视频文件（放在 static/video/ 下） */}

<video controls width="100%">
  <source src="/video/locomotion-run-demo.mp4" type="video/mp4" />
</video>

## 关键参数

| 参数 | 推荐值 | 说明 |
|------|--------|------|
| Walk Speed | 150 | 行走最大速度 |
| Run Speed | 375 | 跑步速度 |
| Sprint Speed | 600 | 冲刺速度 |

## 注意事项

- BlendSpace 的插值模式建议使用 **Per Bone Blend**，避免脚部滑步
- 确保动画根骨骼运动 (Root Motion) 与速度值匹配
